import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {getDoc, deleteDoc, getDocs, doc, setDoc,collection, getFirestore, query, where } from 'firebase/firestore';
import { Movie } from "./interface/Movie";
import { Perfil } from "./interface/Perfil";
import { User } from "./interface/User";
import toast from "react-hot-toast";
import { Serie } from "./interface/Serie";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (email: string, password: string) => {
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential;
  } catch (error) {
      return null;
  }
};

const getAllUsers = async (): Promise<User[]> => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<User, "id">),
    }));
  } catch (error) {
    return [];
  }
};

const getPerfilesPorUsuario = async (userId: string|undefined): Promise<Perfil[]> => {
  try {
    const profilesRef = collection(db, `users/${userId}/profiles`);
    const querySnapshot = await getDocs(profilesRef);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Perfil, "id">),
    }));
  } catch (error) {
    return [];
  }
};

interface ProfileWithFavorites extends Perfil {
  favorites: Movie[];
}

const getProfileWithFavorites = async (userId: string, profileId: string): Promise<ProfileWithFavorites | null> => {
  try {
    const profileRef = doc(db, `users/${userId}/profiles/${profileId}`);
    const profileSnap = await getDoc(profileRef);

    if (!profileSnap.exists()) {
      return null;
    }

    const profileData = profileSnap.data() as Perfil;

    const favoritesRef = collection(db, `users/${userId}/profiles/${profileId}/favorites`);
    const querySnapshot = await getDocs(favoritesRef);

    return {
      ...profileData,
      id: profileId,
      favorites: querySnapshot.docs.map(doc => doc.data() as Movie),
    };
  } catch (error) {
    return null;
  }
};

const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return { id: user.uid, ...(userDoc.data() as Omit<User, "id">) };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};


const logOut = () => {
  signOut(auth);
};

const createProfile = async (userId: string | undefined, profileName: string) => {
  try {
    const profilesRef = collection(db, `users/${userId}/profiles`);

    const q = query(profilesRef, where("name", "==", profileName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      toast.error("Ya existe un perfil con ese nombre")
      return false;
    }

    const profileRef = doc(profilesRef);
    await setDoc(profileRef, {
      profile_id: profileRef.id,
      name: profileName,
    });

    return true;
  } catch (error) {
    return false;
  }
};

const deleteProfile = async (userId: string|undefined, profileId: string) => {
  try {
    const favoritesRef = collection(db, `users/${userId}/profiles/${profileId}/favorites`);
    const favoritesSnapshot = await getDocs(favoritesRef);

    const deletePromises = favoritesSnapshot.docs.map(fav => deleteDoc(doc(db, fav.ref.path)));
    await Promise.all(deletePromises);

    await deleteDoc(doc(db, `users/${userId}/profiles/${profileId}`));

    return true;
  } catch (error) {
    return false;
  }
};

const addFavoriteToProfile = async (
  userId: string | undefined,
  profileId: string | undefined,
  item: Movie | Serie| null | undefined
) => {
  try {
    if (!userId || !profileId || !item) return;

    const itemRef = doc(db, `users/${userId}/profiles/${profileId}/favorites/${item.id}`);

    const itemSnap = await getDoc(itemRef);

    if ('title' in item) {
      // Es una Movie
      if (itemSnap.exists()) {
        toast.error(`La película "${item.title}" ya está en favoritos`);
        return;
      }

      await setDoc(itemRef, item);
      toast.success(`Película "${item.title}" añadida a favoritos`);
    } else if ('name' in item) {
      // Es una Serie
      if (itemSnap.exists()) {
        toast.error(`La serie "${item.name}" ya está en favoritos`);
        return;
      }

      await setDoc(itemRef, item);
      toast.success(`Serie "${item.name}" añadida a favoritos`);
    }
  } catch (error) {
    toast.error(`Error al añadir a favoritos`);
  }
};


const removeFavoriteToProfile = async (
  userId: string | undefined,
  profileId: string | undefined,
  item: Movie | Serie | undefined
) => {
  try {
    if (!userId || !profileId || !item) return;

    const itemRef = doc(db, `users/${userId}/profiles/${profileId}/favorites/${item.id}`);

    const itemSnap = await getDoc(itemRef);


    if ('title' in item) {
      // Es una Movie
      if (!itemSnap.exists()) {
        toast.error(`La película "${item.title}" ya está eliminada de favoritos`);
        return;
      }
      toast.success(`Película ${item.title} eliminada de favoritos`);
      await deleteDoc(itemRef);

    } else if ('name' in item) {
      // Es una Serie
      if (!itemSnap.exists()) {
        toast.error(`La serie "${item.name}" ya se eliminó`);
        return;
      }
      toast.success(`Serie ${item.name} eliminada de favoritos`);
      await deleteDoc(itemRef);

    }

    return true;
  } catch (error) {
    toast.error(`Error al eliminar de favoritos`);
    return false;
  }
};



const getFavoritesByProfile = async (userId: string | undefined, profileId: string | undefined): Promise<Movie[] | Serie[]> => {
  try {
    const favoritesRef = collection(db, `users/${userId}/profiles/${profileId}/favorites`);
    const querySnapshot = await getDocs(favoritesRef);

    return querySnapshot.docs.map(doc => ({
      ...(doc.data() as Movie),
    }));
  } catch (error) {
    return [];
  }
};

export { getFavoritesByProfile };


export {
  auth,
  db,
  login,
  addFavoriteToProfile,
  removeFavoriteToProfile,
  createProfile,
  signUp,
  logOut,
  getAllUsers,
  getPerfilesPorUsuario,
  getProfileWithFavorites
  ,deleteProfile
};

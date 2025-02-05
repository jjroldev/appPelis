import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {getDoc, deleteDoc, getDocs, doc, setDoc,collection, getFirestore, query, where } from 'firebase/firestore';
import { Movie } from "./interface/Movie";
import { Perfil } from "./interface/Perfil";
import { User } from "./interface/User";
import toast from "react-hot-toast";
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

const signUp = async (name: string, last_name: string, email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;

    const usuario = {
      id: user.uid,
      name,
      last_name,
      authProvider: "local",
      email,
      password,
    };

    await setDoc(doc(db, "users", user.uid), usuario);

    return usuario;
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

const findUserByEmailAndPassword = async (email: string): Promise<User | null> => {
  try {
    const users = await getAllUsers();
    const user = users.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
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



const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true
  } catch (error) {
    return false
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


const addFavoriteToProfile = async (userId: string|undefined, profileId: string|undefined, movie: Movie|null) => {
  try {
    const movieRef = doc(db, `users/${userId}/profiles/${profileId}/favorites/${movie?.id}`);
    await setDoc(movieRef, movie);
    toast.success(`Película ${movie?.title} añadida a favoritos`)
  } catch (error) {
    toast.error(`Error al añadir ${movie?.title} a favoritos`)
  }
};

const removeFavoriteToProfile = async (
  userId: string | undefined,
  profileId: string | undefined,
  movie: Movie | undefined
) => {
  try {

    const movieRef = doc(db, `users/${userId}/profiles/${profileId}/favorites/${movie?.id}`);
  
    await deleteDoc(movieRef);
    toast.success(`Película ${movie?.title} eliminada de favoritos`);
    return true;
  } catch (error) {
    toast.error(`Error al eliminar ${movie?.title} de favoritos`);
    return false;
  }
};



const getFavoritesByProfile = async (userId: string | undefined, profileId: string | undefined): Promise<Movie[]> => {
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
  ,findUserByEmailAndPassword
};

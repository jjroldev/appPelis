import { useNavigate, useParams } from 'react-router';
import './EditProfile.css';
import { editProfileName, getProfileWithFavorites } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../../components/Spinner/Spinner';
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { deleteProfile } from '../../firebase';
import { Perfil } from '../../interface/Perfil';
import { getPerfilesPorUsuario } from '../../firebase';
export default function EditProfile() {
    const { profileId } = useParams();
    const { currentUser } = useAuth();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const { data: profile, isLoading } = useQuery(
        `profile-${profileId}`,
        () => getProfileWithFavorites(currentUser?.id, profileId), { staleTime: 0 }
    );

    const { isLoading: isLoadingPerfiles } = useQuery<Perfil[]>(
        `perfiles-${currentUser?.id}`,
        () => getPerfilesPorUsuario(currentUser?.id),
        {
            enabled: !!currentUser?.id
            , staleTime: 0
        }
    );

    const [nombrePerfil, setNombrePerfil] = useState('');

    useEffect(() => {
        if (!isLoading && profile) {
            setNombrePerfil(profile?.name);
        }
    }, [isLoading, profile]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleEditar = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!currentUser?.id || !profile?.id || nombrePerfil.trim() === profile?.name) {
            return;
        }
    
        const success = await editProfileName(currentUser.id, profile.id, nombrePerfil.trim());
    
        if (success) {
            queryClient.setQueryData(`profile-${profileId}`, (oldData: any) => {
                if (!oldData) return oldData;
                return { ...oldData, name: nombrePerfil.trim() };
            });
    
            queryClient.setQueryData(`perfiles-${currentUser?.id}`, (oldData: Perfil[] | undefined) => {
                if (!oldData) return [];
                return oldData.map((perfil) =>
                    perfil.id === profile.id ? { ...perfil, name: nombrePerfil.trim() } : perfil
                );
            });
    
            navigate('/manageProfiles');
        }
    };
    


    const handleEliminar = async (perfilId: string | undefined, event: React.MouseEvent) => {
        event.stopPropagation()
        const response = await deleteProfile(currentUser?.id, perfilId);
        if (response) {
            toast.success("Perfil eliminado exitosamente");
            queryClient.setQueryData(`perfiles-${currentUser?.id}`, (oldData: Perfil[] | undefined) => {
                if (!oldData) return [];
                return oldData.filter((perfil) => perfil.id !== perfilId);
            });
            navigate('/manageProfiles')
        } else {
            toast.error("Error al eliminar el perfil");
        }
    };

    if (isLoading || isLoadingPerfiles) {
        return <Spinner />;
    }

    return (
        <div className='editPerfil'>
            <div className="wrapper-title-EP">
                <h2 className='text-white'>Edit profile</h2>
            </div>
            <form className="formContainer h-screen" onSubmit={handleEditar}>
                <div className="wrapper-img-EP">
                    <img src={`/appPelis/${profile?.imagen}`} alt="Profile" />
                    {/* <i className="fa-solid fa-pencil pencil-icon"></i> */}
                </div>
                <input
                    className='inputTextFormEP'
                    type="text"
                    placeholder='Enter name'
                    ref={inputRef}
                    required
                    value={nombrePerfil}
                    onChange={(e) => setNombrePerfil(e.target.value)}
                />
                <div className="wrapper-option-remove">
                    <div className="wrapper-description-option-remove flex justify-between items-center">
                        <div className='w-full'>
                            <h3>Remove profile?</h3>
                            <span className='removeSpan'>Remove this profile from Justflix.</span>
                        </div>
                        <button
                            type='button'
                            className='button-EP button-remove'
                            onClick={(event) => handleEliminar(profile?.id, event)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div className="wrapper-buttons-EP w-full h-full flex items-end justify-center gap-6.5">
                    <button
                        type='button'
                        className='button-EP'
                        onClick={() => navigate('/manageProfiles')}
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className={`button-EP bSaveEP ${nombrePerfil.trim() === profile?.name ? "disabled-button-EP" : ""}`}
                        disabled={nombrePerfil.trim() === profile?.name}
                    >
                        Save changes
                    </button>
                </div>
            </form>
        </div>
    );
}

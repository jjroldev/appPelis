import { useAuth } from '../../context/AuthContext';
import { getPerfilesPorUsuario, deleteProfile } from '../../firebase';
import './ManagePerfil.css';
import { Perfil } from '../../interface/Perfil';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../../components/Spinner/Spinner';
import { useMenu } from '../../context/MenuContext';
export default function ManagePerfil() {
    const { currentUser, setCurrentPerfil } = useAuth();
    const navigate = useNavigate();
    const { setOpenMenu } = useMenu()

    useEffect(() => {
        setOpenMenu(false)
    }, []);

    const queryClient = useQueryClient();

    const { data: perfiles = [], isLoading } = useQuery<Perfil[]>(
        `perfiles-${currentUser?.id}`,
        () => getPerfilesPorUsuario(currentUser?.id),
        {
            enabled: !!currentUser?.id
        }
    );
    
    const handleEliminar = async (perfilId: string, event: React.MouseEvent) => {
        event.stopPropagation()
        const response = await deleteProfile(currentUser?.id, perfilId);
        if (response) {
            toast.success("Perfil eliminado exitosamente");
            queryClient.invalidateQueries(`perfiles-${currentUser?.id}`);
        } else {
            toast.error("Error al eliminar el perfil");
        }
    };

    const handleNavigate = (perfil: Perfil) => {
        setCurrentPerfil(perfil);
        navigate('/home');
    };

    if (isLoading) {
        return <Spinner />
    }

    if (!isLoading && perfiles.length === 0) {
        navigate('/createProfile');
    }

    return (
        <div className="containerPerfiles">
            {perfiles.length != 0 && (
                <div className="PerfilesExistentesContainer">
                    <h2 className="tituloPerfiles">Select Perfil</h2>
                    <div className='perfiles'>
                        {perfiles.map((perfil) => (
                            <div key={perfil.id} className="contenedorPerfil">
                                <img className='perfil-img' src={`/appPelis/${perfil.imagen}`} alt="" onClick={() => handleNavigate(perfil)} />
                                <h4 className='nombrePerfil'>{perfil.name}</h4>
                                <i className="fa-solid fa-x iconoX" onClick={(event) => handleEliminar(perfil.id, event)}></i>
                            </div>
                        ))}
                    </div>
                    <button className='buttonPerfiles' onClick={() => navigate('/createProfile')}>Crear perfil</button>
                </div>
            )
            }
        </div>
    );
}

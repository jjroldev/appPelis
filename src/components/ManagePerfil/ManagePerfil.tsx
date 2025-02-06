import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getPerfilesPorUsuario ,createProfile,deleteProfile} from '../../firebase';
import './ManagePerfil.css';
import { Perfil } from '../../interface/Perfil';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../Spinner/Spinner';

export default function ManagePerfil() {
    const { currentUser, setCurrentPerfil } = useAuth();
    const [mostrar, setMostrar] = useState(false);
    const [nombrePerfil, setNombrePerfil] = useState("");
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { data: perfiles = [], isLoading } = useQuery<Perfil[]>(
        `perfiles-${currentUser?.id}`,
        () => getPerfilesPorUsuario(currentUser?.id),
        {
            staleTime: 0,
            enabled: !!currentUser?.id
        }
    );

    const handleCrear = async () => {
        if (!nombrePerfil) {
            toast.error("Ingresa un nombre");
            return;
        }

        if (perfiles.length >= 5) {
            toast.error("Solo puede tener como máximo 5 perfiles");
            return;
        }

        const nuevoPerfil = await createProfile(currentUser?.id, nombrePerfil);
        if (nuevoPerfil) {
            toast.success("Perfil creado exitosamente");
            setNombrePerfil("");
            setMostrar(false);
            queryClient.invalidateQueries(`perfiles-${currentUser?.id}`);
        }
    };

    const handleEliminar = async (perfilId: string) => {
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
        return (
            <Spinner />
        );
    }

    return (
        <div className="containerPerfiles">
            {!mostrar ? (
                !isLoading && (
                    perfiles.length === 0 ? (
                        <div className='flex flex-col contenedorManage'>
                            <h2 className="tituloPerfiles">Crear un perfil</h2>
                            <button className='buttonPerfiles' onClick={() => setMostrar(true)}>Crea un perfil</button>
                        </div>
                    ) : (
                        <div className="PerfilesExistentesContainer">
                            <h2 className="tituloPerfiles">Selecciona un perfil</h2>
                            <div className='perfiles'>
                                {perfiles.map((perfil) => (
                                    <div key={perfil.id} className="contenedorPerfil">
                                        <img className='perfil-img' src="/appPelis/avatar3.png" alt="" onClick={() => handleNavigate(perfil)} />
                                        <h4 className='nombrePerfil'>{perfil.name}</h4>
                                        <i className="fa-solid fa-x iconoX" onClick={() => handleEliminar(perfil.id)}></i>
                                    </div>
                                ))}
                            </div>
                            <button className='buttonPerfiles' onClick={() => setMostrar(true)}>Crear perfil</button>
                        </div>
                    )
                ) 
            ) : (
                <div className='creacionPerfil'>
                    <img src="/appPelis/avatar3.png" alt="" />
                    <input type="text" placeholder='Nombre del perfil' required onChange={(e) => setNombrePerfil(e.target.value)} />
                    <button className='buttonPerfilesCrear' onClick={handleCrear}>Crear</button>
                    <button className='buttonListo' onClick={() => setMostrar(false)}>Listo</button>
                </div>
            )}
        </div>

    );
}

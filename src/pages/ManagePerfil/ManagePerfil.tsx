import { useAuth } from '../../context/AuthContext';
import { getPerfilesPorUsuario } from '../../firebase';
import './ManagePerfil.css';
import { Perfil } from '../../interface/Perfil';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../../components/Spinner/Spinner';
import { useMenu } from '../../context/MenuContext';
export default function ManagePerfil() {
    const { currentUser, setCurrentPerfil } = useAuth();
    const navigate = useNavigate();
    const { setOpenMenu } = useMenu()
    const [edit, setEdit] = useState<boolean>(false)
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

    useEffect(() => {
        queryClient.invalidateQueries(`perfiles-${currentUser?.id}`);
    }, []);


    const handleNavigate = (perfil: Perfil) => {
        setCurrentPerfil(perfil);
        if (edit) {
            navigate(`/editProfile/${perfil.id}`)
        } else {
            navigate('/home');
        }
    };

    const toggleEdit = () => {
        setEdit(!edit);
    };


    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="containerPerfiles">
            <div className="PerfilesExistentesContainer">
                <h2 className="tituloPerfiles">Who's watching?</h2>
                <div className='perfiles'>
                    {perfiles.map((perfil) => (
                        <div key={perfil.id} className="containerP" onClick={() => handleNavigate(perfil)}>
                            <div className="contenedorPerfil">
                                <img className='perfil-img relative' src={`/appPelis/${perfil.imagen}`} alt="" />
                                {
                                    edit && (
                                        <div className="containerEdit absolute top-0 right-0 w-full h-full">
                                            <i className="fa-solid fa-pencil"></i>
                                        </div>
                                    )
                                }
                            </div>
                            <h4 className='nombrePerfil'>{perfil.name}</h4>
                        </div>
                    ))}

                    {
                        perfiles.length < 5 && (
                            <div className="containerP" onClick={() => navigate('/createProfile')}>
                                <div className="contenedorPerfil">
                                    <div className="crearPerfilDiv bg-gray-800 w-full h-full">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <h4 className='nombrePerfil'>Add new</h4>
                            </div>
                        )
                    }
                </div>
                <div className="container-button-crearProfile p-2">
                    <button className={`buttonPerfiles bg-gray-800 ${!perfiles.length ? "disabled-button-MP" : ""}`} onClick={toggleEdit}
                        disabled={!perfiles.length}
                    >
                        {edit ? "Done" : "Edit profile"}
                    </button>
                </div>
            </div>
        </div>
    );
}

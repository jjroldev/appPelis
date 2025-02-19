import './CreateProfile.css'
import IOSSwitch from '../../components/SwitchInput/SwitchInput';
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { createProfile } from '../../firebase';
import { useQuery, useQueryClient } from 'react-query';
import { Perfil } from '../../interface/Perfil';
import { getPerfilesPorUsuario } from '../../firebase';
export default function CreateProfile() {

    const [nombrePerfil, setNombrePerfil] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);

    const [checked, setChecked] = useState(false);
    const { currentUser } = useAuth()
    // const [imgPerfilSelect,setImgPerfilSelect]= useState('avatar1.png')
    const queryClient= useQueryClient()
    const { data: perfiles = [] } = useQuery<Perfil[]>(
        `perfiles-${currentUser?.id}`,
        () => getPerfilesPorUsuario(currentUser?.id),
        {
            enabled: !!currentUser?.id
        }
    );

    const [isCreating, setIsCreating] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleCrear = async () => {
        if (!nombrePerfil) {
            toast.error("Ingresa un nombre");
            return;
        }
        setIsCreating(true);
    
        try {
            const nuevoPerfil = await createProfile(currentUser?.id, nombrePerfil,
                checked ? "kid-1.png" : `avatar1.png`, checked ? "kid" : `adult`
            );
            if (nuevoPerfil) {
                toast.success("Perfil creado exitosamente");
                setNombrePerfil("");
    
                const perfilesActualizados = await getPerfilesPorUsuario(currentUser?.id);
                queryClient.setQueryData(`perfiles-${currentUser?.id}`, perfilesActualizados);
    
                navigate('/manageProfiles');
            }
        } catch (error) {
            toast.error("Error al crear el perfil");
        } finally {
            setIsCreating(false);
        }
    };
    
    return (
        <div className='creacionPerfil'>
            <div className="wrapper-title-CP">
                <h2 className='text-white'>New profile</h2>
            </div>
            <form className="formContainer h-screen" method='post'>
                <div className="wrapper-img-cp">
                    <img src={checked ? "/appPelis/kid-1.png" : `/appPelis/avatar1.png`} alt="" />
                    <i className="fa-solid fa-pencil pencil-icon"></i>
                </div>
                <input className='inputTextFormCP' type="text" placeholder='Enter name' ref={inputRef}
                    required onChange={(e) => setNombrePerfil(e.target.value)} />

                <div className="wrapper-option-kids">
                    <h3>Kid's profile?</h3>
                    <div className="wrapper-description-option-kids flex justify-between items-center">
                        <span className='kidsSpan'>TV shows and movies for ages 12 and under</span>
                        <IOSSwitch sx={{ m: 1 }} defaultChecked={false} onChange={handleChange} />
                    </div>
                </div>

                <div className="wrapper-buttons-CP w-full h-full flex items-end justify-center gap-6.5">
                    <button type='button' className={`button-CP ${!perfiles.length ? "disabled-button-SC" : ""}`}
                        onClick={() => navigate('/manageProfiles')}
                        disabled={!perfiles.length}
                    >Cancel</button>

                    <button type='submit'
                        className={`button-CP bSaveC ${!nombrePerfil ? "disabled-button-SC" : ""}`}
                        onClick={handleCrear}
                        disabled={isCreating || !nombrePerfil}
                    >{isCreating ? "Creating..." : "Save changes"}
                    </button>
                </div>
            </form>
        </div>
    )
}
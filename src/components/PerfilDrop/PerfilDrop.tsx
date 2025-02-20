import './PerfilDrop.css';
import { Perfil } from '../../interface/Perfil';
import { useAuth } from '../../context/AuthContext';
import { useEmail } from '../../context/ExistsEmailContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getPerfilesPorUsuario } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PerfilDrop() {
    const navigate = useNavigate();
    const { currentUser, logout, currentPerfil, setCurrentPerfil } = useAuth();
    const { setEmailExists } = useEmail();
    const [showDropdown, setShowDropdown] = useState(false);

    const { data: perfiles = [] } = useQuery<Perfil[]>(
        `perfiles-${currentUser?.id}`,
        () => getPerfilesPorUsuario(currentUser?.id),
        {
            staleTime: 0,
            enabled: !!currentUser?.id
        }
    );

    const handleNavigate = (perfil: Perfil | null) => {
        setCurrentPerfil(perfil);
        setShowDropdown(false);
    };

    return (
        <div
            className="contenedorPerfilImagen"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <div className="containerImagePerfil">
                <img src={`/appPelis/${currentPerfil?.imagen}`} alt="Perfil" />
            </div>

            <NavDropdown title="" id="navbarScrollingDropdown" show={showDropdown}>

                {perfiles?.map((perfil) => (
                    perfil.id !== currentPerfil?.id && (
                        <NavDropdown.Item key={perfil.id} className="drop" onClick={() => handleNavigate(perfil)}>
                            <div className="containerImagePerfil">
                                <img src={`/appPelis/${perfil.imagen}`} alt="Perfil" />
                            </div>
                            <span>{perfil.name}</span>
                        </NavDropdown.Item>
                    )
                ))}
                {showDropdown && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="dropdown-motion"
                        >
                            <NavDropdown.Item className="drop" onClick={() => navigate('/manageProfiles')}>
                                <span>Administrar perfiles</span>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item className="drop" onClick={() => {
                                setEmailExists(false);
                                logout();
                            }}>
                                <span className="logOut">Sign out</span>
                            </NavDropdown.Item>
                        </motion.div>
                    </AnimatePresence>
                )}
            </NavDropdown>
        </div>
    );
}

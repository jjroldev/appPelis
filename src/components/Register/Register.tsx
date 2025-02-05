import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { signUp } from '../../firebase';
import { useEmail } from '../../context/ExistsEmailContext';
export default function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {loginAuth}=useAuth()
    const {setEmailExists}=useEmail()


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const usuario= await signUp(name,lastName,email,password)
        if (!usuario) {
            setEmailExists(true)
            navigate("/login")
        }else{
            navigate("/manageProfiles");
            loginAuth(usuario)
        }
    };

    return (
        <div className="formContainer">
            <form className="formulario" onSubmit={handleRegister}>
                <div className="header-form">
                    <h2>Register</h2>
                </div>
                <div className="contenedorInput">
                    <input onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="José Javier" minLength={5} />
                </div>
                <div className="contenedorInput">
                    <input onChange={(e) => setLastName(e.target.value)} id="lastName" type="text" placeholder="Roldán Browm" minLength={5} />
                </div>
                <div className="contenedorInput">
                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email@example.com" minLength={5} />
                </div>
                <div className="contenedorInput">
                    <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Contraseña" minLength={6} maxLength={20} />
                </div>
                <div>
                    <button className="button-enviar">Register</button>
                </div>
                <div className="suscribirse">
                    <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
                </div>
            </form>
        </div>
    );
}

import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { signUp } from '../../firebase';
import { useEmail } from '../../context/ExistsEmailContext';
import { doc,setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { User } from '../../interface/User';
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
    
        try {
            const userCredential = await signUp(email, password);
            if (!userCredential) {
                setEmailExists(true);
                navigate('/login')
                return;
            }
    
            const authUser = userCredential.user;
            if (!authUser) {
                navigate('/login')
                setEmailExists(true);
                return;
            }
    
            const userData:User = {
                id: authUser.uid,
                name,
                last_name:lastName,
                email,
                password,
            };
    
            await setDoc(doc(db, "users", authUser.uid), userData);
    
            loginAuth(userData);
            navigate("/manageProfiles");
        } catch (error) {
            setEmailExists(true);
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

import { useEffect, useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEmail } from "../../context/ExistsEmailContext";
import "./Login.css";
import { findUserByEmailAndPassword, login } from "../../firebase";
import { useMenu } from "../../context/MenuContext";
export default function Login() {
  const { loginAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const{setOpenMenu}=useMenu()

  const navigate = useNavigate();

  useEffect(()=>{
    setOpenMenu(false)
  },[])


  const { emailExists } = useEmail();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const log = await login(email, password);
    
    if (log) {
      const user = await findUserByEmailAndPassword(email);
      
      if (user) {
        login(email,password)
        loginAuth(user);
        navigate("/manageProfiles");
      } else {
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  };
  
  return (
    <>
      <div className="formContainer">
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="headerForm">
            <h2>Login</h2>
          </div>
          <div className={`${open ? "contentEmailExists" : "notVisible"}`}>
            <h2>The email or password is incorrect</h2>
            <p>Please log in to continue</p>
          </div>
          <div className={`${emailExists ? "contentEmailExists" : "notVisible"}`}>
            <h2>Email already exists</h2>
            <p>Please log in to continue</p>
          </div>
          <div className="contenedorInput">
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@example.com" minLength={5} />
          </div>
          <div className="contenedorInput">
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" minLength={6} maxLength={20} />
          </div>
          <div>
            <button className="button-enviar">Login</button>
          </div>
          <div className="suscripbirse">
            <p>First time on JustFlix? <span onClick={() => { navigate('/register') }}>Subscribe now</span></p>
          </div>
        </form>
      </div>
    </>
  );
}

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { loginUser } from '../services/authService';
import './Login.css';


// Componente de Login
export default function Login({ setToken }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); // Actualizar el estado del formulario
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await loginUser(form); // Llamar al servicio de login

        // Manejar la respuesta del login
        if(data.token) {
            localStorage.setItem('token', data.token); 
            setToken(data.token); // Actualizar el estado del token de acceso
            setMsg('Login successful! Redirecting to dashboard...'); 
            setTimeout(() => navigate('/dashboard'), 500); 
        } else {
            setMsg(data.msg || 'Login failed');

        }
    };

    // Renderizado del componente
    return (
        <div className="login-container" style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label  >Password:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
                <button type="button" className="go-register-button" onClick={() => navigate('/register')}>Go to Register</button> 
            </form>
            {msg && <p>{msg}</p>}
        </div>
    );
}
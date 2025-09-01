import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { registerUser } from '../services/authService';
import './Register.css';

// Componente de registro de usuario
export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); // Actualiza el estado del formulario

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await registerUser(form);
        setMsg(data.error || data.message); 
        if (data.msg === 'Usuario registrado exitosamente') {
            setMsg('¡Registro exitoso! Redirigiendo al login...');
            setTimeout(() => navigate('/login'), 1500);
        }
        
    };

    // Renderiza el formulario de registro
    return (
        <div className="register-container" style={{ padding: '20px' }}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="register-button" onClick={handleSubmit}>Register</button>
                <button type="button" className="go-login-button" onClick={() => navigate('/login')}>Go to Login</button>
                

            </form>
            {msg && <p>{msg}</p>}
        </div>
    );
}
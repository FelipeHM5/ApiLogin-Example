import { useNavigate } from "react-router-dom";
import './Dashboard.css';

// Componente del Dashboard
export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Eliminar el token del almacenamiento local
    navigate("/login"); // Redirigir al usuario a la página de login
  };

  // Renderizado del componente
  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <h2>Bienvenido al Dashboard</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

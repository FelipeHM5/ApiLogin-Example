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
      <h2>Welcome to your Dashboard</h2>
      <p>You've successfully logged in </p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

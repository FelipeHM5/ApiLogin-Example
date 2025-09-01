import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState (localStorage.getItem('token')); // Estado para almacenar el token

  return (
    // Configuración de rutas
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}



export default App; // Exportar el componente App

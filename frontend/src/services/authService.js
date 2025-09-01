const API_URL = 'http://localhost:10000/api/auth'; //Direccion API

// Registrar un nuevo usuario
export const registerUser = async (data) => {
    try {
    const res = await fetch(`${API_URL}/register`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // Convierte el objeto data a una cadena JSON
    });
    
    const json = await res.json();
    if (!res.ok) throw new Error(json.msg|| 'Error en el registro');
    return json; // Devuelve la respuesta JSON si la solicitud fue exitosa
} catch (error) {
    return { error: error.message};
}
};
export const loginUser = async (data) => {
    const res = await fetch(`${API_URL}/login`, { // Endpoint de login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();

};
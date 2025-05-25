//Conecta el frontend con el backend usando Axios para realizar peticiones HTTP.
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

// Obtener todas las publicaciones
export const getPosts = () => {
    return axios.get(API_URL);
};

// Obtener una publicación por su ID
export const getPostById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Crear una nueva publicación
export const createPost = (postData) => {
    return axios.post(API_URL, postData);
};

// Actualizar una publicación existente
export const updatePost = (id, postData) => {
    return axios.put(`${API_URL}/${id}`, postData);
};

// ✅ Eliminar una publicación
export const deletePost = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

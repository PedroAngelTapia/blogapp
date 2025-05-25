import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/postService';

function PostForm() {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ titulo, contenido }).then(() => navigate('/publicaciones'));
    };

    return (
        <div>
            <h2>Crear nueva publicación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label><br />
                    <input value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Contenido:</label><br />
                    <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} required />
                </div>
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}

export default PostForm;

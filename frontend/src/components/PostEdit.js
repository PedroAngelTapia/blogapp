import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../services/postService';

const PostEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({
        titulo: '',
        contenido: ''
    });

    useEffect(() => {
        getPostById(id)
            .then((response) => {
                setPost({
                    titulo: response.data.titulo,
                    contenido: response.data.contenido
                });
            })
            .catch((error) => {
                console.error('Error al obtener la publicación', error);
                alert('No se pudo cargar la publicación');
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(id, post)
            .then(() => navigate('/publicaciones'))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h2>Editar Publicación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={post.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contenido:</label>
                    <textarea
                        name="contenido"
                        value={post.contenido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default PostEdit;

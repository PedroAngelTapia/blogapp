import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../services/postService';

const PostEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    useEffect(() => {
        getPostById(id)
            .then((response) => {
                setPost({
                    title: response.data.title,
                    content: response.data.content
                });
            })
            .catch((error) => {
                console.error('Error al obtener el post', error);
                alert('No se pudo cargar el post');
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
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contenido:</label>
                    <textarea
                        name="content"
                        value={post.content}
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

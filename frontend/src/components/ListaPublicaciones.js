import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../services/postService';

function ListaPublicaciones() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        getPosts()
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = (id) => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta publicación?");
        if (confirmar) {
            deletePost(id)
                .then(() => fetchPosts())
                .catch(error => alert('Error al eliminar la publicación'));
        }
    };

    return (
        <div>
            <h2>Lista de Publicaciones</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/publicaciones/${post.id}`}>{post.titulo}</Link>
                        {" "}
                        <Link to={`/editar/${post.id}`} style={{ color: 'blue' }}>Editar</Link>
                        {" "}
                        <button onClick={() => handleDelete(post.id)} style={{ color: 'red' }}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPublicaciones;

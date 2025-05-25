//Muestra la lista  de publicaciones del blog y permite eliminarlas
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../services/postService';
import './ListaPublicaciones.css'; // ← Importamos los estilos

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
        <div className="lista-publicaciones">
            <h2>Lista de Publicaciones</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <div>
                            <Link to={`/publicaciones/${post.id}`}>{post.titulo}</Link>
                        </div>
                        <div className="links">
                            <Link to={`/editar/${post.id}`} className="enlace-editar">Editar</Link>
                            <button onClick={() => handleDelete(post.id)} className="boton-eliminar">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPublicaciones;

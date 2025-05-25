import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/postService';

function ListaPublicaciones() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <div>
            <h2>Lista de Publicaciones</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/publicaciones/${post.id}`}>{post.titulo}</Link>
                        {" "}
                        <Link to={`/editar/${post.id}`} style={{ color: 'blue' }}>Editar</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPublicaciones;

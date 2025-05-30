import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/postService';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>Lista de Publicaciones</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/publicaciones/${post.id}`}>{post.title}</Link>{' '}
                        <Link to={`/editar/${post.id}`}>Editar</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;

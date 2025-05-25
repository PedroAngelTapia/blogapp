import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/postService';

function DetallesPublicacion() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPostById(id)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener la publicación:", error);
                setError("No se pudo cargar la publicación.");
            });
    }, [id]);

    if (error) {
        return <div><h2>Error</h2><p>{error}</p></div>;
    }

    if (!post) {
        return <div>Cargando publicación...</div>;
    }

    return (
        <div>
            <h2>{post.titulo}</h2>
            <p>{post.contenido}</p>
        </div>
    );
}

export default DetallesPublicacion;

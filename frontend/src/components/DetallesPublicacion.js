import React from 'react';
import { useParams } from 'react-router-dom';

function DetallesPublicacion() {
    const { id } = useParams();
    return (
        <div>
            <h2>Detalles de la Publicación {id}</h2>
            <p>Aquí irían más detalles si se implementan.</p>
        </div>
    );
}

export default DetallesPublicacion;

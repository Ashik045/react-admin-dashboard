import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { userId, productId } = useParams();
    return <div>Detail {userId || productId}</div>;
}

export default Detail;

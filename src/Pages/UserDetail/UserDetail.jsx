import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
    //
    const { userId } = useParams();
    return (
        <div>
            <h2>userDetail {userId}</h2>
        </div>
    );
}

export default UserDetail;

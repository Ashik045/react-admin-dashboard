import React from 'react';
import warning from '../Images/warning.png';
import './notfound.scss';

function PageNotFound() {
    return (
        <div className="page_not_found">
            <div className="page_not_found_main">
                <img src={warning} alt="Not found page" />
                <h1>404 page not found.</h1>
            </div>
        </div>
    );
}

export default PageNotFound;

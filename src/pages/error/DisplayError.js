import React from 'react';
import './error.css';

const DisplayError = () => {
    return (
        <div class="main_body">
            <div class="center_body">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <p>Do not insert any custom route to the search bar</p>
                <a href="/" target="_blank">
                    {' '}
                    go to homepage
                </a>
            </div>
        </div>
    );
};

export default DisplayError;

import React from 'react';
import { Link } from 'react-router-dom';
// import './LinkButton.css';

const LinkButton = ({ to, text }) => {
    return (
        <Link to={to} className="link-button">
            {text}
        </Link>
    );
};

export default LinkButton;
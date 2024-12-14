import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/game');
    };

    return <button className='button' onClick={handleClick}>Start</button>;
}

export default Button;

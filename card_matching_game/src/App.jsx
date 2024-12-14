// App.jsx
import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Button from './Button';
import Game from './page/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<>
                    <Welcome />
                    <Button />
                </>} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </Router>
    );
}

export default App;

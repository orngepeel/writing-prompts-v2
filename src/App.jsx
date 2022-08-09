import './App.css';
import MainPage from './pages/MainPage';
import React from 'react';
import { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState("Click the button or press space to generate a new prompt!");
    return (
        <MainPage prompt={prompt}/>
    )
}

export default App;

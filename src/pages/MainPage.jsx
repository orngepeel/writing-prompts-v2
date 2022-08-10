import React from "react";
import PromptContainer from "../components/PromptContainer";
import { useState, useEffect } from "react";

function MainPage() {
    const [prompt, setPrompt] = useState("Click the button or press space to generate a new prompt!");
    const [genre, setGenre] = useState();
    const [protagonist, setProtagonist] = useState();
    const [conflict, setConflict] = useState();
    const [antagonist, setAntagonist] = useState();

    const loadGenre = async () => {
        const response = await fetch(`/genre`);
        const genre = await response.json();
        setGenre(genre);
    };

    const loadProtagonist = async () => {
        const response = await fetch(`/protagonist`);
        const protagonist = await response.json();
        setProtagonist(protagonist);
    };
    
    const loadConflict = async () => {
        const response = await fetch(`/conflict`);
        const conflict = await response.json();
        setConflict(conflict);
    };
    
    const loadAntagonist = async () => {
        const response = await fetch(`/antagonist`);
        const antagonist = await response.json();
        setAntagonist(antagonist);
    };

    const generatePrompt = () => {
        const newPrompt = `Write ${genre.article} ${genre.name} story where ${protagonist.name} ${conflict.name} ${antagonist.name}.`

        return newPrompt
    }

    const handleClick = () => {
        const newPrompt = generatePrompt();
        setPrompt(newPrompt);
    };

    const handleKeyDown = (event) => {
        if(event.key === " ") {
            const newPrompt = generatePrompt();
            setPrompt(newPrompt);
        };
    };

    useEffect(() => {
        loadGenre();
        loadProtagonist();
        loadConflict();
        loadAntagonist();
    }, []);

    return (
        <div onKeyDown={handleKeyDown}>
            <PromptContainer prompt={prompt} />
            <button onClick={handleClick}>New Prompt!</button>
        </div>
    )
};

export default MainPage;
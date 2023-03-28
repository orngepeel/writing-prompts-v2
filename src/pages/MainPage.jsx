import React from "react";
import PromptContainer from "../components/PromptContainer";
import { useState, useEffect } from "react";
import useEventListener from "@use-it/event-listener";

const URL = 'writing-prompts-v2-server-production.up.railway.app'

function MainPage() {
    const [prompt, setPrompt] = useState("Click the button or press space to generate a new prompt!");
    const [genre, setGenre] = useState();
    const [protagonist, setProtagonist] = useState();
    const [conflict, setConflict] = useState();
    const [antagonist, setAntagonist] = useState();

    const loadGenre = async () => {
        const response = await fetch(`${URL}/genre`);
        const genre = await response.json();
        setGenre(genre[0]);
    };

    const loadProtagonist = async () => {
        const response = await fetch(`${URL}/protagonist`);
        const protagonist = await response.json();
        setProtagonist(protagonist[0]);
    };
    
    const loadConflict = async () => {
        const response = await fetch(`${URL}/conflict`);
        const conflict = await response.json();
        setConflict(conflict[0]);
    };
    
    const loadAntagonist = async () => {
        const response = await fetch(`${URL}/antagonist`);
        const antagonist = await response.json();
        setAntagonist(antagonist[0]);
    };

    const generatePrompt = () => {
        loadGenre();
        loadProtagonist();
        loadConflict();
        loadAntagonist();
        const newPrompt = `Write ${genre.article} ${genre.name} story where ${protagonist.name} ${conflict.name} ${antagonist.name}.`

        return newPrompt
    }

    const handleClick = () => {
        const newPrompt = generatePrompt();
        setPrompt(newPrompt);
    };

    const handleKeyDown = ({key}) => {
        const SPACE_KEYS = [' ', 'Spacebar', '32']
        if(SPACE_KEYS.includes(String(key))) {
            const newPrompt = generatePrompt();
            setPrompt(newPrompt);
        };
    };

    useEventListener('keydown', handleKeyDown);

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
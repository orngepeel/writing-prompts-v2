import React from "react";
import { useState, useEffect } from "react";

const generatePrompt = async () => {
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

    useEffect(() => {
        loadGenre();
        loadProtagonist();
        loadConflict();
        loadAntagonist();
    }, []);

    return `Write ${genre.article} ${genre.name} story where ${protagonist.name} ${conflict.name} ${antagonist.name}.`
}

export default generatePrompt;
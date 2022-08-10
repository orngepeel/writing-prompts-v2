import React from "react";
import PromptContainer from "../components/PromptContainer";
import generatePrompt from "../util/generatePrompt";

function MainPage() {
    const [prompt, setPrompt] = useState("Click the button or press space to generate a new prompt!");

    const handleClick = async () => {
        newPrompt = await generatePrompt();
        setPrompt(newPrompt);
    };

    const handleKeys = async (event) => {
        if(event.key === " ") {
            newPrompt = await generatePrompt();
            setPrompt(newPrompt);
        };
    };

    return (
        <div>
            <PromptContainer prompt={prompt} />
            <button onClick={handleClick} onKeyDown={handleKeys}>New Prompt!</button>
        </div>
    )
};

export default MainPage;
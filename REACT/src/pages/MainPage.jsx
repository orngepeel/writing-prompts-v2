import React from "react";
import PromptContainer from "../components/PromptContainer";

function MainPage() {
    return (
        <div>
            <PromptContainer prompt={prompt} />
            <button>New Prompt!</button>
        </div>
    )
};
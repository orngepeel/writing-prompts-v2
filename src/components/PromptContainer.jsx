import React from "react";
import Prompt from "./Prompt";

function PromptContainer({prompt}) {
    return (
        <div>
            <h1>Writing Prompt Generator</h1>
            <Prompt prompt={prompt} />
        </div>
    );
}

export default PromptContainer;
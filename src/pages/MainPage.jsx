import React from "react";
import PromptContainer from "../components/PromptContainer";

function MainPage({prompt}) {
    return (
        <div>
            <PromptContainer prompt={prompt} />
            <button>New Prompt!</button>
        </div>
    )
};

export default MainPage;
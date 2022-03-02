import React from "react";

function Portfolio({writingSample, deleteWritingSample, updateWritingSample}) {

    // console.log("props:",  writingSample)

    return (
        <div>
            <h1>{writingSample.title}</h1>
                <h3>{writingSample.category}</h3>
                <p>{writingSample.content}</p>
                <button onClick={() => deleteWritingSample(writingSample.id)}>Delete Sample</button>
                <button onClick={() => updateWritingSample(writingSample)}>Edit</button>
        </div>
    )
}

export default Portfolio;
import React, { useState } from "react";

const QuestionBox = ({question,options,selected}) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">
                {question}
                {answer.map((text, index) =>(
                    <button
                    key ={index}
                    className="answerBtn"
                    onClick = {() => {
                        setAnswer([text]);
                        selected(text);
                    }}>
                        {text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionBox;
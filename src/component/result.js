import React from 'react'

const Result = ({score, playagain}) => (
    <div className="score-board">
        Your Score is {score}/5answers
        <div className="playBtn" onClick={playagain}>
            Play Again
        </div>
    </div>
)

export default Result;
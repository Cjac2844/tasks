import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts((prevAttempts) => prevAttempts - 1);
        }
    };

    const stopQuiz = () => {
        setQuizInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}

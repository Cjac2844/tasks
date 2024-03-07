import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(e.target.value);
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempt = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <p>Attempts Left: {attemptsLeft}</p>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={handleChange}
                    placeholder="Enter attempts"
                    role="spinbutton"
                />
                <button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </button>
                <button onClick={handleGainAttempt}>Gain</button>
            </div>
        </div>
    );
}

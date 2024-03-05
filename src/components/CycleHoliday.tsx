import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎏");
    const holidays = ["🎏", "🎃", "🪔", "🎄", "🎉"];

    const advanceByAlphabet = () => {
        const currentIndex = holidays.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    };

    const advanceByYear = () => {
        const currentIndex = holidays.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}

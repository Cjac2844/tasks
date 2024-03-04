import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*CycleHoliday
The CycleHoliday component is a little more complicated, but should be an opportunity to be creative. Think about your 5 favorite holidays, and then find 5 emojis that represent them. You will create two buttons that let you “cycle” through each holiday, one button alphabetically and the other button by time in the year. Ultimately, the holidays you pick are up to you, and we will not micromanage your choice of alphabetization or specific date chosen EXCEPT that the two orderings should not be the same (because that’s no fun).

You will need one state, either a string or an enumeration of 5 strings like QuestionType (perhaps named Holiday).
You will need to define two functions (or two Records) that can take in an existing holiday and produce the next holiday - one function should produce the next holiday alphabetically, and the other produces the next holiday in the year.
The view should render the current holiday with the text Holiday: followed by the emoji (e.g., Holiday: 🎃).
The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet) and changes the current holiday to the next one alphabetically.
The second button should include the text Year somewhere (e.g., Advance by Year) and changes the current holiday to the next one in the year.
For example, let us say we only had three holidays:

🎏 to represent the Dragon Boat Festival in the summer
🎃 to represent Halloween at the end of October
🪔 to represent Diiwali earlier in October
Then the transitions in the year would be:

🎏 -> 🪔
🪔 -> 🎃
🎃 -> 🎏
And the transitions alphabetically would be:

🪔 -> 🎏
🎏 -> 🎃
🎃 -> 🪔
*/
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

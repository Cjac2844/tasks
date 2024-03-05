import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState(10);
    const double = () => setValue(value * 2);
    const halve = () => setValue(value / 2);
    return (
        <div>
            <h1>{value}</h1>
            <Button onClick={double}>Double</Button>
            <Button onClick={halve}>Halve</Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex
}: {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
    return (
        <Button
            onClick={() =>
                setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: { colorIndex: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <ChangeColor setColorIndex={setColorIndex} />
            <ColorPreview colorIndex={colorIndex} />
        </div>
    );
}

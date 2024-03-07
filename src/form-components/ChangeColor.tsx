import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <label key={index} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                        />
                        <span
                            style={{ backgroundColor: color, padding: "2px" }}
                        >
                            {color}
                        </span>
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </div>
        </div>
    );
}

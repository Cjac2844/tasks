import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {!editMode ? (
                    <p>
                        {userName}{" "}
                        {isStudent ? "is a student" : "is not a student"}
                    </p>
                ) : (
                    <div>
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                            role="textbox"
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={handleStudentChange}
                                role="checkbox"
                            />{" "}
                            Student
                        </label>
                    </div>
                )}
                <div className="form-switch">
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={handleSwitchChange}
                        role="checkbox"
                    />
                </div>
            </div>
        </div>
    );
}

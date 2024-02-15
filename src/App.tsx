import React from "react";
import "./App.css";
import image1 from "./images/Big-Chungus.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Connor Jackson
            </header>
            <h1> Big Chungus, Big Chungus, Big Chungus </h1>
            <img src={image1} alt="Big Chungus the movie" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. I love Big Chungus and he is a very big
                bunny! Hello World
            </p>
            <ol>
                <li>Big</li>
                <li>Chungus</li>
                <li>Is a big bunny</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#ff0000"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#ff0000"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

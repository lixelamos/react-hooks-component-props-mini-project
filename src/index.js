import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
const minutesToRead = 7; // calculated based on article content
const coffeeCups = Math.ceil(minutesToRead / 5);

const coffeeCupEmojis = '☕️'.repeat(coffeeCups);
const minutesText = `${minutesToRead} min read`;

const indicatorText = `${coffeeCupEmojis} ${minutesText}`;

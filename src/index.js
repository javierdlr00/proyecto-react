//const element = document.createElement("h1");
//element.innerText = "Hello React";
//const container = document.getElementById("root");
//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App/index";

const container = document.getElementById("root");
// const container_styled = document.getElementById("root-styled");

// ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(<App></App>, container);

// ReactDOM.render(__QUE__,__DONDE__)
//ReactDOM.render(<CardStyled></CardStyled>, container_styled);

import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"
import App from "./components/App"

import "normalize.css";
import "./styles/index.scss"

const jsx = (
    <div>
        <Header/>
        <App />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))
import React from "react"
import ReactDOM from "react-dom"
import style from "./styles/index.scss"
import Header from "./components/Header"
import App from "./components/App"

const jsx = (
    <div>
        <Header/>
        <App />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))
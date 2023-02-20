import React from "react"
import {Header} from "./components/Header"
import {Main} from "./components/Main"
import {Footer} from "./components/Footer"
import './style.css'

export default function App() {
    return (
        <div className="container">
            <div className="card">
                < Header />
                < Main />
                < Footer />
            </div>
        </div>
    )
}
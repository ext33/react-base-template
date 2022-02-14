import React, { FC } from "react"

import "./styles/root.sass"
import AppRouter from "./router"

const App: FC = () => {
    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}

export default App

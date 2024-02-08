import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GameContextProvider} from "./context/contextGame.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GameContextProvider>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </GameContextProvider>
)

import "../style/header.css"
import {useGameContext} from "../context/contextGame.tsx";
import {formatTime} from "../utils/formatTime.ts"


export default function Header() {

    const {handleRestartGame,gameStats }=useGameContext()

    const roundedCurrMoves:number = Math.round(gameStats.moves / 2)
    return <header className='header'>
        <p>Moves:{roundedCurrMoves}</p>
        <button onClick={handleRestartGame}>restart</button>
        <p>Time:{formatTime(gameStats.seconds)}</p>
    </header>
}
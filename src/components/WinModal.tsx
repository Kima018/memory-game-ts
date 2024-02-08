import '../style/winmodal.css'
import {useGameContext} from "../context/contextGame.tsx";
import {formatTime} from "../utils/formatTime.ts";

export default function WinModal() {
    const {gameStats, handleRestartGame} = useGameContext()


    const score = <h3>HIGH SCORE IS {gameStats.bestScore}</h3>

    // if (gameStats.bestScore< highScore){
    //     score = <h3>NEW HIGH SCORE IS YOUYRS {highScore}, CONGRATULATIONS! </h3>
    // }

    return <div className='win-modal'>
        <div>
            <h2>NICE,You won!!!</h2>
            {score}
            <h3>Time {formatTime(gameStats.seconds)} sec</h3>
            <button onClick={() => handleRestartGame()}>Play again</button>
        </div>

    </div>
}
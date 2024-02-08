import {initialGameStats,initialGameProps} from "../utils/initialGameStats.ts";

export const checkBestScore = (gameStats:initialGameProps, setGameStats):void => {
    const storedData = JSON.parse(localStorage.getItem('Data'))
    if (storedData) {
        if (gameStats.moves / 2 < storedData.bestScore || gameStats.bestScore === 0) {
            setGameStats((prevState: initialGameProps) => ({
                ...prevState,
                bestScore: storedData.bestScore
            }))
            localStorage.setItem('Data', JSON.stringify({...storedData, bestScore: gameStats.moves / 2}))
        }
    } else {

            localStorage.setItem('Data',JSON.stringify({...initialGameStats,bestScore: gameStats.moves / 2} ))
    }

}
import {createContext, useContext, useEffect, useState} from "react";
import {initialGameStats} from "../utils/initialGameStats.ts";
import {data} from "../data/data.ts";
import shuffle from "../utils/shuffle.ts";
import {checkCardMatch} from "../hooks/checkCardMatch.ts";
import {checkBestScore} from "../hooks/checkBestScore.ts";
import {fetchLocalStorageData} from "../utils/fetchLocalStorageData.ts";
import {CardsArrayProps, GameContextProps, GameProviderProps, initialGameProps} from "../utils/types.ts";


const GameContext = createContext<GameContextProps | null>(null);


const GameContextProvider = ({children}: GameProviderProps) => {
    const [gameStats, setGameStats] = useState<initialGameProps>(initialGameStats)
    const [cards, setCards] = useState<CardsArrayProps>(shuffle.bind(null, data.concat(data)))
    const [hasWinner, setHasWinner] = useState<boolean>(false)
    fetchLocalStorageData()

    const handleCardClick = (index: number) => {
        if (gameStats.openCards.length < 2) {
            setGameStats((prevState: initialGameProps) => ({
                ...prevState,
                openCards: [index, ...prevState.openCards],
                moves: prevState.moves + 1
            }));
        }
        if (!gameStats.isGameActive) {
            setGameStats((prevState: initialGameProps) => ({
                ...prevState, isGameActive: true
            }))
        }
    }
    useEffect(() => {
        if (gameStats.openCards.length === 2) {
            checkCardMatch(gameStats, cards, setGameStats)
            setTimeout(() => {
                setGameStats((prevState: initialGameProps) => ({
                    ...prevState, openCards: []
                }))
            }, 800)
        }
    }, [gameStats.openCards.length])


    useEffect((): void => {
        if (gameStats.matchedCards.length === cards.length) {
            checkBestScore(gameStats, setGameStats)
            setTimeout((): void => {
                setHasWinner(true)
                setGameStats((prevState: initialGameProps) => ({...prevState, isGameActive: false}))
            }, 500)
        }
    }, [gameStats.matchedCards.length])

    useEffect(() => {
        let interval
        if (gameStats.isGameActive) {
            interval = setInterval((): void => {
                setGameStats((prevState: initialGameProps) => ({
                    ...prevState, seconds: prevState.seconds + 1
                }))
            }, 1000)

        }
        return (): void => {
            clearInterval(interval)
        }
    }, [gameStats.isGameActive])

    const handleRestartGame = (): void => {
        setGameStats(initialGameStats)
        setTimeout((): void => {
            setCards(shuffle.bind(null, data.concat(data)))
        }, 700)
        setHasWinner(false)
    }

    const contextValues: GameContextProps = {gameStats, cards, handleCardClick, hasWinner, handleRestartGame}
    return (<GameContext.Provider value={contextValues}> {children} </GameContext.Provider>)
};


const useGameContext = () => {
    const context: GameContextProps = useContext(GameContext);
    if (!context) {
        throw new Error('Context not provided!');
    }
    return context;
};
export {GameContext, GameContextProvider, useGameContext}
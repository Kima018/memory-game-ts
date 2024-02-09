import {initialGameProps,CardsArrayProps} from "../utils/types.ts";
export const checkCardMatch = (gameStats:initialGameProps,cards:CardsArrayProps,setGameStats) => {
    const [firstCard, secondCard] = gameStats.openCards
    if (cards[firstCard].name === cards[secondCard].name) {
        setTimeout(() => {
            setGameStats(prevState => ({
                ...prevState, matchedCards: [firstCard, secondCard, ...prevState.matchedCards]
            }))
        }, 500)
    }
}
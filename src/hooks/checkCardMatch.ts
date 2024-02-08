
export const checkCardMatch = (gameStats,cards,setGameStats) => {
    const [firstCard, secondCard] = gameStats.openCards
    if (cards[firstCard].name === cards[secondCard].name) {
        setTimeout(() => {
            setGameStats(prevState => ({
                ...prevState, matchedCards: [firstCard, secondCard, ...prevState.matchedCards]
            }))
        }, 500)
    }
}
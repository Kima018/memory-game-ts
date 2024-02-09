
export const checkIsPicked = (gameStats,index):boolean => {
    return Boolean(gameStats.openCards.includes(index))
}
export const checkIsMatched = (gameStats,index):boolean=> {
    return Boolean(gameStats.matchedCards.includes(index))
}
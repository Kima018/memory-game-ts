 export interface initialGameProps  {
        openCards: number[],
        matchedCards: number[],
        seconds: number,
        isGameActive: boolean,
        moves: number,
        bestScore: number
    }

    const initialGameStats:initialGameProps = {
    openCards: [],
    matchedCards: [],
    seconds: 0,
    isGameActive: false,
    moves: 0,
    bestScore: 0
}
export {initialGameStats}
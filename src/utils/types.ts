import React from "react";

export type initialGameProps = {
    openCards: number[],
    matchedCards: number[],
    seconds: number,
    isGameActive: boolean,
    moves: number,
    bestScore: number
}
export type setGameProp={
   setGameStats: React.Dispatch<React.SetStateAction<initialGameProps>>
}
export type GameContextProps = {
    gameStats: initialGameProps,
    cards: CardsArrayProps,
    handleCardClick: (index: number) => void,
    handleRestartGame: () => void,
    hasWinner: boolean
}
export type CardsProps = {
    name: string,
    img: string,
    id: number
}
export type CardsArrayProps = CardsProps[]
export type GameProviderProps = {
    children: React.ReactNode;
}
export type formatTimeFunction= (timeInSeconds:number)=>string
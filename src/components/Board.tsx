import Card from "./Card";
import '../style/GameBoard.css'
import {useGameContext} from "../context/contextGame.tsx";
import WinModal from "./WinModal.tsx";
import {CardsProps} from "../context/contextGame.tsx";

export default function Board() {
    const {cards,handleCardClick ,hasWinner} = useGameContext()

    return <div className='container'>
        <div className='game-board'>
            {cards.map((item:CardsProps, index:number) => {
                return <Card
                    key={index}
                    index={index}
                    cardLogo={item.img}
                    onClick={handleCardClick}
                />
            })}
        </div>
        {hasWinner && <WinModal/>}
    </div>
}

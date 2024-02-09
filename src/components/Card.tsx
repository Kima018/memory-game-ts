import '../style/card.css'
import Logo from '../assets/logo1.png'
import {useGameContext} from "../context/contextGame.tsx";
import {checkIsMatched,checkIsPicked} from "../utils/checkIsPicked.ts";



export default function Card({onClick, cardLogo, index}) {
    const { gameStats} = useGameContext()
    const isPicked :boolean =  checkIsPicked(gameStats, index)
    const isMatched:boolean =  checkIsMatched(gameStats, index)

    const handleClick = ():void => {
        !isPicked && onClick(index);
    };
    let cardClass:string = 'card'
    if (isPicked) {
        cardClass = 'card card-picked'
    }
    if (isMatched) {
        cardClass = 'card card-picked card-matched'
    }

    return <div onClick={handleClick}
                className={cardClass}>
        <div className='front-card'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='back-card'>
            <img src={cardLogo} alt='This is Logo!'/>
        </div>
    </div>
}
import {CardsArrayProps,CardsProps} from "./types.ts";
export default function shuffle(array:CardsArrayProps):CardsArrayProps {
    const length = array.length;
    for (let i:number = length; i > 0; i--) {
        const randomIndex:number = Math.floor(Math.random() * i);
        const currentIndex:number = i - 1;
        const temp:CardsProps = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
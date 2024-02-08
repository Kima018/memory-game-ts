type formatTimeFunction= (timeInSeconds:number)=>string
export const formatTime:formatTimeFunction  = (timeInSeconds)=> {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes < 1 ?'00':`0${minutes}`}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

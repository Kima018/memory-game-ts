import {initialGameStats} from "./initialGameStats.ts";

export const fetchLocalStorageData = () => {
    const tempData = JSON.parse(localStorage.getItem('Data'))
    if (!tempData) {
        localStorage.setItem('Data', JSON.stringify(initialGameStats))
    }

}

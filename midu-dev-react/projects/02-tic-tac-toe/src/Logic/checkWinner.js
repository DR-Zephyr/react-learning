import { WINNER_COMBOS } from '../constants';

export const checkWinner = (boardToCheck) => {
    //Recorrer todas las combinaciones para ver si hay una combinacion ganadora
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    //Si no hay ganador
    return false;
};

export const checkEndGame = (boardToCheck) => {
    //revisameos si hay algun cuadro vacio en el tablero
    return boardToCheck.every((square) => square !== null);
};

export function saveData(key, data) {
    localStorage.setItem(`${key}`, JSON.stringify(data));
}

export function getData(key) {
    return JSON.parse(localStorage.getItem(`${key}`));
}

export function removedData(key) {
    localStorage.removeItem(`${key}`);
}
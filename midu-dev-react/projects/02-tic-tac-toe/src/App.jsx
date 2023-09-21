import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { WinnerModal } from './components/WinnerModal';
import {
    checkWinner,
    checkEndGame,
    saveData,
    removedData,
    getData,
} from './Logic/checkWinner';

//
function App() {
    //
    const [board, setboard] = useState(() => {
        //Recuperar el tablero del local storage
        const boardFromStorage = getData('board');
        return boardFromStorage ? boardFromStorage : Array(9).fill(null);
    });
    const [turn, setTurn] = useState(() => {
        //Recuperar el turno del local storage
        const turnFromStorage = getData('turn');
        return turnFromStorage ?? TURNS.O;
    });
    const [winner, setWinner] = useState(null);

    //
    //Resetear el tablero
    const resetGame = () => {
        setboard(Array(9).fill(null));
        setTurn(TURNS.O);
        setWinner(null);
        //Esto es para borrar los datos del local storage
        removedData('board');
        removedData('turn');
    };
    //

    const updateBoard = (index) => {
        //Si ya existe un valor en el cuadro, no se puede actualizar
        if (board[index] || winner) return;
        //copia del tablero ya que no se puede modificar el estado directamente
        const newBoard = [...board];
        newBoard[index] = turn;
        setboard(newBoard);
        //
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        //Esto es para guardar los datos en el local storage
        saveData('board', newBoard);
        saveData('turn', newTurn);
        //Verificar si hay un ganador
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false); //Empate
        }
    };
    //
    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Empezar de nuevo</button>
            <section className='game'>
                {board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {square}
                        </Square>
                    );
                })}
            </section>

            <section className='turn'>
                <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal
                resetGame={resetGame}
                winner={winner}
            />
        </main>
    );
}

export default App;

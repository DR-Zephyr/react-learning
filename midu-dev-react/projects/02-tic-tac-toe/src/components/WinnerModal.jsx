import { Square } from './Square';
import PropTypes from 'prop-types';

export function WinnerModal({ winner, resetGame }) {
    //
    const winnerText = winner === false ? 'Empate' : `Ganador:`;
    //
    if (winner === null) return null;

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <button onClick={resetGame}>Empezar de nuevo</button>
            </div>
        </section>
    );
}

WinnerModal.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func.isRequired,
};

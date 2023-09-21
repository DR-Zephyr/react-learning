//
import { useEffect, useState } from 'react';
import './App.css';

const FollowMouse = () => {
    //
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //
    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            console.log('handleMove', clientX, clientY);
            setPosition({ x: clientX, y: clientY });
        };
        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        }

        return () => {
            window.removeEventListener('pointermove', handleMove);
            console.log('clean up');
        };
    }, [enabled]);
    //
    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: '#000',
                    border: '1px solid #fff',
                    borderRadius: '50%',
                    opacity: 0.8,
                    pointerEvents: 'none',
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
            <h3>Proyecto 3</h3>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
            </button>
        </>
    );
};

function App() {
    return (
        <div className='App'>
            <FollowMouse />
        </div>
    );
}

export default App;
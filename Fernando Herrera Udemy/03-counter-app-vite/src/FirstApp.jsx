//

import PropTypes from 'prop-types';

export const FirstApp = ({ titulo, subtitulo, nombre }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h2>{subtitulo}</h2>
            <p>{nombre}</p>
        </>
    );
};

FirstApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
};

FirstApp.defaultProps = {
    nombre: 'Emmanuel Cruz',
    titulo: 'Hola, soy vegeta',
    subtitulo: 'No hay subtitulo',
};

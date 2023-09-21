import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from 'react';

describe('Pruebas en FirstApp', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const titulo = 'Hola, soy vegeta';
    //     const { container, getByText } = render(<FirstApp titulo={titulo} />);
    // });

    // test('Debe mostar el titulo de un h1', () => {
    //     const titulo = 'Hola, soy vegeta';
    //     const { container, getByText } = render(<FirstApp />);
    //     const h1 = container.querySelector('h1');

    //     expect(h1.innerHTML).toContain(titulo);
    // });

    test('Debe mostar el titulo de un h2', () => {
        const subtitulo = 'Soy un subtitulo';
        const { getAllByText } = render(<FirstApp subtitulo={subtitulo} />);

        expect(getAllByText(subtitulo).length).toBe(2);
    });
});

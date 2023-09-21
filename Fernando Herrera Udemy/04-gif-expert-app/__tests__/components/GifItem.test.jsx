import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el GifItem', () => {
    //
    const title = 'Saitma',
        urlImage = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source';
    //
    test('Debe hacer match con el snapshot', () => {
        const { asFragment } = render(
            <GifItem
                title={title}
                url={urlImage}
            />
        );
        //
        expect(asFragment()).toMatchSnapshot();
    });
    //
    test('debe mostar la imagen con el src y el alt indicado', () => {
        //
        render(
            <GifItem
                title={title}
                url={urlImage}
            />
        );
        //
        const { src, alt } = screen.getByRole('img');
        //
        expect(src).toBe(urlImage);
        expect(alt).toBe(title);
    });
    //
    test('Debe de mostar el titulo en el componente', () => {
        render(
            <GifItem
                title={title}
                url={urlImage}
            />
        );
        //
        expect(screen.getByText(title)).toBeTruthy();
    });
});

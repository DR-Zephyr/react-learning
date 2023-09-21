import { getGifs } from '../../src/helpers/getGifs';

describe('Prubas en getGifs()', () => {
    //
    test('debe de retonar un arreglo con todos los gifs', async () => {
        //
        const gifs = await getGifs('One piece');
        //
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});

//

import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC',
            });
            done();

            console.log(hero);
        });
    });

    test('getHeroeByIdAsync debe de retornar un error si el heroe no se encuentra', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch((err) => {
            expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        });
    });
});

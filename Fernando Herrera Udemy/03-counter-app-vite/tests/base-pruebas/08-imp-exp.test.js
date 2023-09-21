//

import { createLogger } from 'vite';
import {
    getHeroeById,
    getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import { heroes } from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeByID debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC',
        });
    });

    test('getHeroeByID debe retornar un valor nulo si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        expect(hero).toEqual(
            heroes.filter((heroe) => heroe.owner === 'Marvel')
        );
    });
});

//

import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas 11-async-await', () => {
    test('getImage deberia retornar la URL de una imagen', async() => {
        const url = await getImagen()
        console.log(url);

        expect( typeof url ).toBe('string')
    });
});
//

import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    //
    test('Debe de cambiar el valor de la caja de texto', () => {
        //
        render(<AddCategory onNewCategory={() => {}} />);
        //
        const input = screen.getByRole('textbox');
        //
        fireEvent.input(input, { target: { value: 'Saitama' } });
        //
        expect(input.value).toBe('Saitama');
        //
        screen.debug();
    });

    test('Debe llamar a onNewCategory, si el input tiene algun valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        //
        render(<AddCategory onNewCategory={onNewCategory} />);
        //
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        screen.debug();
        //
        expect(input.value).toBe('');
        expect(onNewCategory).toBeCalled();
        //
        screen.debug();
    });
    //
    test('No debe llamar a onNewCategory, si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        //
        render(<AddCategory onNewCategory={onNewCategory} />);
        //
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //
        fireEvent.submit(form);
        //
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        //
        screen.debug();
    });
});

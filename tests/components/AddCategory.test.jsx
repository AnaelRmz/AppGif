import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Prueba del componente <AddCategory />', () => { 

    test('Debe de cabiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={() => {} } /> );
        
        const input  = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: 'Cyberpunk2077EdgeRunner' } } );
        expect( input.value ).toBe('Cyberpunk2077EdgeRunner')
        // screen.debug();
     });


    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue  = 'Horizon FW';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

     });


     test('No debe llamar onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

       
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
       

     });

 });
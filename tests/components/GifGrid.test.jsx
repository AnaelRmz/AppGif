import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Prueba al componente <GifGrid />', () => { 

    const category = 'Aloy';

    test('Debede mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        // screen.debug();
        expect(screen.getByText('cargando...') );
        expect(screen.getByText( category ) );

     });

     test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'HorizonZD',
                url: 'https://guerrillagames.jpg'
            },

            {
                id: '123',
                title: 'Tsushima',
                url: 'https://noloreuerdo.jpg'
            }
    ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render( <GifGrid category={ category } /> );

        // screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2);

      });

 });

 
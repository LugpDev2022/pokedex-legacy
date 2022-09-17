import { render, screen } from '@testing-library/react';
import { PokeCard } from '../../src/components';

describe('Tests in <PokeCard />', () => {
  const pokemon = {
    name: 'Chikorita',
    sprites: {
      front_default: 'https://chikorita.com/',
    },
    id: '57',
  };
  test('should match with snapshot', () => {
    const { container } = render(<PokeCard pokemon={pokemon} />);

    expect(container).toMatchSnapshot();
  });

  test('should show the pokemon name', () => {
    render(<PokeCard pokemon={pokemon} />);

    expect(screen.getByText(pokemon.name));
  });

  test('should show the given image', () => {
    render(<PokeCard pokemon={pokemon} />);
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(pokemon.sprites.front_default);
    expect(alt).toBeTruthy();
  });
});

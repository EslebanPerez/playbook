const Superhero = require('./../app/Superhero')

describe('Unit test for Superhero', () => {
    test('Case 1: Get a Superhero', () => {
        
        const ironman = new Superhero('Iron man','Tony Stark', 'Robert Downey Jr.')

        expect(ironman.name).toBe('Iron man')
        expect(ironman.actor).toBe('Robert Downey Jr.')
        expect(ironman.heroName).toBe('Tony Stark')

    });
  });
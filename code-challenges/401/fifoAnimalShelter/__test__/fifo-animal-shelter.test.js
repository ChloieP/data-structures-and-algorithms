'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe ('AnimalShelter', () => {
  let shelter;
  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  describe('First In First Out Animal Shelter', () => {
    it('can create a new empty shelter', () => {
      shelter = new AnimalShelter();

      expect(shelter.front).toBeNull();
      expect(shelter.back).toBeNull();
    });
    it('can enqueue an animal into the shelter', () => {
      let animal = 'dog';
      shelter.enqueue(animal);

      expect(shelter.front.animal).toBe(animal);
      expect(shelter.back.animal).toBe(animal);
    });

    it('can enqueue multiple animals into the shelter', () => {
      let animal1 = 'dog';
      let animal2 = 'cat';
      let animal3 = 'dog';

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);
      shelter.enqueue(animal3);

      expect(shelter.front.animal).toBe(animal1);
      expect(shelter.front.next.animal).toBe(animal2);
      expect(shelter.back.animal).toBe(animal3);
    });

    it('can only enqueue cats and dogs into the shelter', () => {
      let animal1 = 'dog';
      let animal2 = 'cat';
      let animal3 = 'iguana';

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);
      shelter.enqueue(animal3);

      expect(shelter.front.animal).toBe(animal1);
      expect(shelter.front.next.animal).toBe(animal2);
      expect(shelter.back.animal).toBe(animal2);
    });

    it('can return an error to the client if searching for anything but dog or cat', () => {
      shelter = new AnimalShelter();

      expect(shelter.enqueue('iguana')).toBe('Can only enqueue \'dog\' or \'cat\'.');
    })

    it('can dequeue animals using FIFO', () => {
      let animal1 = 'dog';
      let animal2 = 'cat';
      let animal3 = 'dog';
      let animal4 = 'dog';

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);
      shelter.enqueue(animal3);
      shelter.enqueue(animal4);

      expect(shelter.dequeue('dog')).toBe(animal3);
      expect(shelter.dequeue('dog')).toBe(animal4);
      expect(shelter.dequeue('dog')).toBe(animal1);
      expect(shelter.dequeue('cat')).toBe(animal2);
    });
  });
});
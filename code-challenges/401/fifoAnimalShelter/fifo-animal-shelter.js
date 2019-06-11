'use strict';

class AnimalShelter{
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    if ( !animal ) return null;

    if ( animal !== 'dog' && animal !== 'cat' ) return `Can only enqueue 'dog' or 'cat'.`;

    animal = { animal, next: null };

    if ( !this.front ) {
      this.front = animal;
      this.back = animal;
      return this.front;
    }

    if ( this.front ) {
      this.back.next = animal;
      this.back = animal;
      return this.front;
    }
  }

  dequeue(pref) {
    if (!pref ) {
      let homewardBound = this.front;
      this.front = this.front.next;
      return homewardBound.animal;
    }

    if ( pref !== 'dog' && pref !== 'cat' ) return null;

    if ( pref === this.front.animal) {
      let homewardBound = this.front;
      this.front = this.front.next
      return homewardBound.animal
    }

    let current = this.front;
    while ( current.next && current.next.animal !== pref ) {
      current.animal = current.next;
    }

    if ( !current.next) return `No ${pref} in the shelter`;
    let homewardBound = current.next;
    current.next = homewardBound.next;
    return homewardBound.animal;
  }
}

module.exports = AnimalShelter;
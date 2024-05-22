import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'River' },
      { id: 2, name: 'Omega' },
      { id: 3, name: 'Dominique X' },
      { id: 4, name: 'Nightcrawl' },
      { id: 5, name: 'Dr. Revlon' },
      { id: 6, name: 'Mystique' },
      { id: 7, name: 'Jamal Milan' },
      { id: 8, name: 'Link' },
      { id: 9, name: 'The Lovegood' },
      { id: 10, name: 'Lofi Fruiter' },
      { id: 11, name: 'Capi' },
      { id: 12, name: 'Ms. Jynx' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 0;
  }
}

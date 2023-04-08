import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeroes() : SuperHero[] {
    
    let hero = new SuperHero();
    hero.id=1;
    hero.name="Kasun Weerasekara";
    hero.firstName="Kasun";
    hero.lastName="Weerasekara";
    hero.place = "Walasmulla"

    return [hero];

  }
}

import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit() : void {
    this.heroes = this.superHeroService.getSuperHeroes();
    console.log(this.heroes);
  }
}

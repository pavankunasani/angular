import { Component, OnInit,Injectable, Inject } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: 'views/dashboard.component.html',
  styleUrls: [ 'views/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
 
  constructor(@Inject(HeroService)  public heroService,@Inject(ActivatedRoute) public route) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroes=this.heroService.getHeroes();
     // .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id);
      console.log("getHero");
  }
}
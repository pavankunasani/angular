
import {Component, OnInit,Inject } from '@angular/core'
import {FormsModule} from "@angular/forms"
import {Hero} from './hero'
import {HEROES} from './MockHEROES'
import {HeroService} from './hero.service'

@Component({
    selector:'app-heroes',
    templateUrl: 'views/heroes.component.html',
    styleUrls: ['views/heroes.component.css']
})

export class HerosComponent{

  /*  hero:Hero ={

        id:1,
        name:'pavan'
    }
*/
constructor(@Inject (HeroService) public heroService) { }
selectedHero: Hero;
 // heroes= HEROES;
 heroes: Hero[];

onSelect(hero:Hero){
this.selectedHero=hero;
//this.getHeroes();
}

ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {

   this.heroes= this.heroService.getHeroes();
               
  }

}
import {Hero} from './hero'
import { Input, Component,Injectable,Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';



@Component({
selector:'hero-detail',
templateUrl:'views/herodetail.component.html',
styleUrls: ['views/herodetail.component.css']

})
export class HeroDeatilComponent {

//@Input() hero:Hero;
hero:Hero
constructor(@Inject(ActivatedRoute) public route, @Inject(HeroService) public heroService){

}

getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id);
    console.log("getHero HeroDeatilComponent");
}

goBack(): void {
 //   this.location.back();
  }
}
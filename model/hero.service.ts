import { Injectable ,Inject} from "@angular/core";
import {MessageService} from "./message.service";
import {HEROES} from './MockHEROES';
import {Hero} from './hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService{



    // constructor(private messageService: MessageService){}

    constructor(@Inject (MessageService) public messageService){}
/*
    getHeroes(): Observable<Hero[]>{

        this.messageService.add('HeroService: fetched heroes');

        return of(HEROES);
    }
    */
   getHeroes(): Hero[]{

    this.messageService.add('HeroService: fetched heroes');

    return (HEROES);
}
getHero(id: number):Hero {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return HEROES.find(hero => hero.id === id);
  }
}
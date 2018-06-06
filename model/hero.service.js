"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var message_service_1 = require("./message.service");
var MockHEROES_1 = require("./MockHEROES");
var HeroService = /** @class */ (function () {
    // constructor(private messageService: MessageService){}
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    /*
        getHeroes(): Observable<Hero[]>{
    
            this.messageService.add('HeroService: fetched heroes');
    
            return of(HEROES);
        }
        */
    HeroService.prototype.getHeroes = function () {
        this.messageService.add('HeroService: fetched heroes');
        return (MockHEROES_1.HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add("HeroService: fetched hero id=" + id);
        return MockHEROES_1.HEROES.find(function (hero) { return hero.id === id; });
    };
    HeroService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(message_service_1.MessageService))
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;

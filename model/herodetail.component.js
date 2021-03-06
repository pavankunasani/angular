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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroDeatilComponent = /** @class */ (function () {
    function HeroDeatilComponent(route, heroService) {
        this.route = route;
        this.heroService = heroService;
    }
    HeroDeatilComponent.prototype.getHero = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id);
        console.log("getHero HeroDeatilComponent");
    };
    HeroDeatilComponent.prototype.goBack = function () {
        //   this.location.back();
    };
    HeroDeatilComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            templateUrl: 'views/herodetail.component.html',
            styleUrls: ['views/herodetail.component.css']
        }),
        __param(0, core_1.Inject(router_1.ActivatedRoute)), __param(1, core_1.Inject(hero_service_1.HeroService))
    ], HeroDeatilComponent);
    return HeroDeatilComponent;
}());
exports.HeroDeatilComponent = HeroDeatilComponent;

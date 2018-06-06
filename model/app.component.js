"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var heroes_component_1 = require("./heroes.component");
var forms_1 = require("@angular/forms");
var herodetail_component_1 = require("./herodetail.component");
var messages_component_1 = require("./messages.component");
var message_service_1 = require("./message.service");
var hero_service_1 = require("./hero.service");
var route_paths_1 = require("./route.paths");
var dashboard_component_1 = require("./dashboard.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'views/app.component.html',
            styleUrls: ['views/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [AppComponent, heroes_component_1.HerosComponent, herodetail_component_1.HeroDeatilComponent, messages_component_1.MessagesComponent, dashboard_component_1.DashboardComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, route_paths_1.AppRoutingModule],
            bootstrap: [AppComponent],
            providers: [message_service_1.MessageService, hero_service_1.HeroService]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);

import {Component,NgModule} from '@angular/core'

import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import { Hero } from './hero'
import {HerosComponent} from './heroes.component'
import { FormsModule } from '@angular/forms'
import {HeroDeatilComponent} from './herodetail.component'
import {MessagesComponent} from './messages.component'
import {MessageService} from './message.service'
import {HeroService} from './hero.service'
import {AppRoutingModule} from './route.paths'
import {DashboardComponent} from './dashboard.component'

@Component({

    selector : 'app-root',
    templateUrl : 'views/app.component.html',
    styleUrls : ['views/app.component.css']

})
 class AppComponent {

title="Tour of Heroes";

}


@NgModule({ 
declarations:[AppComponent,HerosComponent,HeroDeatilComponent,MessagesComponent,DashboardComponent],
imports:[BrowserModule,FormsModule,AppRoutingModule],
bootstrap:[AppComponent],
providers:[MessageService,HeroService]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)
import { Component, OnInit,Inject } from '@angular/core';
import { MessageService } from './message.service';
 
@Component({
  selector: 'app-messages',
  templateUrl: 'views/messages.component.html',
  styleUrls: ['views/messages.component.css']
})
export class MessagesComponent implements OnInit {
 
 // constructor(public messageService: MessageService) {}
 constructor(@Inject (MessageService) public messageService){}
 
  ngOnInit() {
  }
 
}
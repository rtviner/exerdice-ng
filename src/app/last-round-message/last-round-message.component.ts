import { Component, Input, OnInit } from '@angular/core';
import { Encouragement } from '../encouragement';
import { MessageService } from '../message.service';

@Component({
  selector: 'last-round-message',
  templateUrl: './last-round-message.component.html',
  styleUrls: ['./last-round-message.component.css']
})
export class LastRoundMessageComponent implements OnInit {
  encouragement: Encouragement;
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getEncouragement();
  }
  
  getEncouragement(): void{
    this.messageService.getEncouragement()
      .subscribe(encouragement => this.encouragement = encouragement);
  }

}

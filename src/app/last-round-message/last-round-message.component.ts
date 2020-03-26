import { Component, OnInit } from '@angular/core';

import { zoomIn } from '../animations';
import { Encouragement } from '../encouragement';
import { MessageService } from '../message.service';

@Component({
  selector: 'last-round-message',
  templateUrl: './last-round-message.component.html',
  styleUrls: ['./last-round-message.component.css'],
  animations: [ zoomIn ]
})
export class LastRoundMessageComponent implements OnInit {
  encouragement: Encouragement;
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getEncouragement();
  }
  
  getEncouragement(): void{
    this.messageService.getRandomEncouragement()
      .subscribe(encouragement => this.encouragement = encouragement);
  }

}

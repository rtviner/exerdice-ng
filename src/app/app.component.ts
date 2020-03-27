import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exerdice-ng';

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.messageService.getRandomEncouragement()
    .subscribe(message => {
      console.log(`api loaded, ${message.message}`);
    });
  }
}

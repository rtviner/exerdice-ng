import { Component, OnInit, Input } from '@angular/core';

import { RoundService } from '../round.service';

@Component({
  selector: 'rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  @Input() rounds: string[];
  //also need to display the boxes with the numOfRounds and active round
  // @Input() numOfRounds: number;

  
  constructor(public roundService: RoundService) { }

  ngOnInit() {
    
  }

}

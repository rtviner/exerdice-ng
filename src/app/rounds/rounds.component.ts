import { Component, OnInit, Input } from '@angular/core';

import { RoundService } from '../round.service';
import { pulse } from './rounds.component.animations';
import { zoomIn } from '../../app/animations';

@Component({
  selector: 'rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css'],
  animations: [ pulse, zoomIn ]
})
export class RoundsComponent implements OnInit {
  @Input() rounds: string[];
  
  constructor(public roundService: RoundService) { }

  ngOnInit() {

  }

  isCurrentRound(roundNum: number){
    return roundNum <= this.roundService.rounds.length;
  };


}

import { Component, OnInit, Input } from '@angular/core';

import { diceWobble } from './dice.component.animations'
import { blockInitialAnimation } from '../animations';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  animations: [ diceWobble, blockInitialAnimation ]
})

export class DiceComponent implements OnInit {
  @Input() diceClass: string;
  @Input() hideDice: boolean;

  constructor() {

   }

  ngOnInit() {

  }

}

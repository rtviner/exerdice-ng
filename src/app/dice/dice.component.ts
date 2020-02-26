import { Component, OnInit, Input } from '@angular/core';

import { NumberService } from '../number.service';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})

export class DiceComponent implements OnInit {
  @Input() dieNumber: number;
  
  constructor() { }

  ngOnInit() {
   
  }

}

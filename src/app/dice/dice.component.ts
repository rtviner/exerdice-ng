import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})

export class DiceComponent implements OnInit {
  @Input() diceClass: string;

  constructor() {

   }

  ngOnInit() {

  }

}

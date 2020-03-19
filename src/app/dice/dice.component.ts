import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
  animations: [
    trigger('wobble', [
      transition('* => *', [
        animate('.8s ease-out', keyframes([
          style({ 
            offset: 0,
            transform: 'translateX(0)'
          }),
          style({ 
            offset: .15,
            transform: 'translateX(-25%) rotate3d(0,0,1,-5deg)'
          }),
          style({ 
            offset: .3,
            transform: 'translateX(20%) rotate3d(0,0,1,3deg)'
          }),
          style({ 
            offset: .45,
            transform: 'translateX(-15%) rotate3d(0,0,1,-3deg)'
          }),
          style({ 
            offset: .6,
            transform: 'translateX(10%) rotate3d(0,0,1,2deg)'
          }),
          style({ 
            offset: .75,
            transform: 'translateX(-5%) rotate3d(0,0,1,-1deg)'
          }),
          style({ 
            offset: 1,
            transform: 'translateX(0)'
          }),
        ]))
      ]),
    ]),
    trigger("blockInitialAnimation", [
      transition( ":enter", [])
    ])
  ]
})

export class DiceComponent implements OnInit {
  @Input() diceClass: string;

  constructor() {

   }

  ngOnInit() {

  }

}

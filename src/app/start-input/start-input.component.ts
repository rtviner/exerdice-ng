import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'start-input',
  templateUrl: './start-input.component.html',
  styleUrls: ['./start-input.component.css']
})
export class StartInputComponent implements OnInit {
  numOfRounds = 6;
  isActive = true;
  nullError = false;
  showError = false;
  constructor() { }

  ngOnInit() {
  }
  // change to startGame method and start game instead of console.logging rounds
  startGame() {
    const rounds = this.numOfRounds;
    this.nullError = !rounds;
    this.showError = (rounds && rounds < 2 || rounds > 8);
    if (!this.nullError && !this.showError) {
      // start game/ hide this input component and how to play component
      //show dice and roll button and rounds info off to the side
      console.log(rounds);
    }
  }

}

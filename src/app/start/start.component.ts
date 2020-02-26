import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  numOfRounds = 6;
  isActive = true;
  nullError = false;
  showError = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // change to startGame method and start game instead of console.logging rounds
  startGame() {
    const rounds = this.numOfRounds;
    this.nullError = !rounds;
    this.showError = (rounds && rounds < 2 || rounds > 8);
    if (!this.nullError && !this.showError) {
      this.router.navigate(["/game"]); 
      // start game/ hide this input component and how to play component
      //show dice and roll button and rounds info off to the side
      console.log(rounds);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { RoundService } from '../round.service';

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
  constructor(private router: Router, private roundService: RoundService) { }

  ngOnInit() {
  }

  startGame() {
    const rounds = this.numOfRounds;
    this.nullError = !rounds;
    this.showError = (rounds && rounds < 2 || rounds > 8);

    if (!this.nullError && !this.showError) {
      this.roundService.setTotalRounds(rounds);
      this.router.navigate(["/game"]); 
    }
  }

}

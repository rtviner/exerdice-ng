import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { RoundService } from '../round.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  diceClass: string;
  currentExercise: Exercise;
  roundNumber: number;
  roundsComplete = false;

  constructor(private router: Router, private exerciseService: ExerciseService, private roundService: RoundService) { }

  ngOnInit() {
    this.resetGame();
  }

  getExercise(exNumber: number): void {
    this.exerciseService.getExercise(exNumber)
      .subscribe(exercise => this.currentExercise = exercise);
  }

   onPlay() { 
    this.roundNumber = this.roundService.getRoundNumber();
 
    if (this.roundNumber === this.roundService.totalRounds -1) {
      this.roundsComplete = true;
    };

    if (this.roundNumber < this.roundService.totalRounds) {
      let dieNumber = Math.floor(Math.random() * 6) +1;
      this.diceClass = `dice_${dieNumber}`;
      this.getExercise(dieNumber);
      this.roundService.add(this.currentExercise.titles[0]);
    }; 
  }

  resetGame() {
    this.currentExercise = null;
    this.roundsComplete = false;
    this.roundService.clear();
  }
  
  newGame() {
    this.resetGame();
    this.router.navigate(["/start"]); 
  }

}

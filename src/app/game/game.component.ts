import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { RoundService } from '../round.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  diceClass: string;
  currentExercise: Exercise;
  currentIndex: number;
  roundNumber: number;
  roundsComplete = false;
  rolls = new Map<number, number>();

  constructor(private router: Router, private exerciseService: ExerciseService, private roundService: RoundService) { }

  ngOnInit() {
    this.resetGame();
  }

  getExercise(exNumber: number): void {
    this.exerciseService.getExercise(exNumber)
      .subscribe(exercise => this.currentExercise = exercise);
  }

   onPlay() { 
    this.roundNumber = 
      this.roundService.getRoundNumber();
 
    if (this.roundNumber < this.roundService.totalRounds) {
      let dieNumber = Math.floor(Math.random() * 6) +1;
      //increment dieNumber in rolls
      let rollFreq = this.rolls.get(dieNumber);
      if (rollFreq && rollFreq < 3) {
        this.rolls.set(dieNumber, rollFreq + 1);
      }
      if (!rollFreq) {
        this.rolls.set(dieNumber, 1);
      };

      this.diceClass = `dice_${dieNumber}`;
      this.getExercise(dieNumber);
      //instead of [0] --> [rolls.get(dieNumber)]
      this.currentIndex = this.rolls.get(dieNumber) - 1 || 0;

      this.roundService.add(this.currentExercise.titles[this.currentIndex]);
    }; 
    if (this.roundNumber === this.roundService.totalRounds -1) {
      this.roundsComplete = true;
    };
  }

  resetGame() {
    this.currentExercise = null;
    this.currentIndex = null;
    this.roundsComplete = false;
    this.roundService.clear();
    this.rolls = new Map<number, number>();
  }
  
  newGame() {
    this.resetGame();
    this.router.navigate(["/start"]); 
  }

}

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
  roundsComplete = false;
  rolls = new Map<number, number>();

  constructor(private router: Router, private exerciseService: ExerciseService, private roundService: RoundService) { }

  ngOnInit() {
    this.resetGame();
  }
  
  rollDie() {
    let dieNumber = Math.floor(Math.random() * 6) +1;
    this.diceClass = `dice_${dieNumber}`;
    let rollFreq = this.rolls.get(dieNumber);
    //increment roll freq for dieNumber if less than 3 bc there are only 3 variations for each exercise
    if (rollFreq && rollFreq < 3) {
      this.rolls.set(dieNumber, rollFreq + 1);
    }
    if (!rollFreq) {
      this.rolls.set(dieNumber, 1);
    };

    return dieNumber;
  }

  getExercise(exNumber: number): void {
    this.exerciseService.getExercise(exNumber)
      .subscribe(exercise => this.currentExercise = exercise);
  }

  onPlay() { 
    let currentRound = 
      this.roundService.getRoundNumber() + 1;
 
    if (currentRound <= this.roundService.totalRounds) {
      let dieNumber = this.rollDie();
      this.getExercise(dieNumber);
      
      this.currentIndex = this.rolls.get(dieNumber) - 1 || 0;

      this.roundService.add(this.currentExercise.titles[this.currentIndex]);
    }; 
    
    if (currentRound === this.roundService.totalRounds) {
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

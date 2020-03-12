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
  dieNumber: number;
  currentExercise: Exercise;
  roundNumber: number;
  roundsComplete = false;

  constructor(private router: Router, private exerciseService: ExerciseService, private roundService: RoundService) { }
  
  ngOnInit() {}

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
      this.dieNumber = Math.floor(Math.random() * 6) +1;
      this.getExercise(this.dieNumber);
      this.roundService.add(this.currentExercise.titles[0]);
    }; 
  }
  // call roundService.clear to delete all round info
    //also need to clear currentExercise
  resetGame() {
    this.currentExercise = null;
    this.roundsComplete = false;
    this.roundService.clear();
  }
  //reset game and route back to start
  newGame() {
    this.resetGame();
    this.router.navigate(["/start"]); 
  }

}

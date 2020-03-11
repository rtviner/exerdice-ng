import { Component, OnInit } from '@angular/core';

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

  constructor(private exerciseService: ExerciseService, private roundService: RoundService) { }
  
  ngOnInit() {
    
  }

 // need to use roundService to setCompletion
  getExercise(exNumber: number): void {
    this.exerciseService.getExercise(exNumber)
      .subscribe(exercise => this.currentExercise = exercise);
  }

  onPlay() { 
    this.roundNumber = this.roundService.getRoundNumber();
    // want to show a message like "finish up strong" in place of dice if we are on the last round
    if (this.roundNumber === this.roundService.totalRounds -1) {
      this.roundsComplete = true;
    };
    if (this.roundNumber < this.roundService.totalRounds) {
      this.dieNumber = Math.floor(Math.random() * 6) +1;
      this.getExercise(this.dieNumber);
      this.roundService.add(this.currentExercise.titles[0]);
    }; 
  }

}

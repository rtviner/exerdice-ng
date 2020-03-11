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
  
  constructor(private exerciseService: ExerciseService, private roundService: RoundService) { }

  ngOnInit() {
    
  }

  getExercise(exNumber: number): void {
    this.exerciseService.getExercise(exNumber)
      .subscribe(exercise => this.currentExercise = exercise);
  }

  onPlay() {
    //only want to do the following if currentRounds < totRounds

    if (this.roundService.rounds.length < this.roundService.totalRounds) {
      this.dieNumber = Math.floor(Math.random() * 6) +1;
      this.getExercise(this.dieNumber);
      this.roundService.add(this.currentExercise.titles[0]);
    } else {
      console.log("game over");
    }
    //else show game over message and game summary
  }

}

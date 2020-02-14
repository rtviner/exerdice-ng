import { Component, OnInit } from '@angular/core';
import { EXERCISES } from '../mock-exercises';
import { Exercise } from '../exercise';

@Component({
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  exercises = EXERCISES;
  currentExercise;
  rounds: string[] = [];
  

  constructor() { }

  ngOnInit() {
  }
  // this will change to get exercise from object by number (not array)

  onRoll(): void {
    const dieNumber = Math.floor(Math.random() * 6) +1;
    let exercise: Exercise = this.exercises[dieNumber -1];
    console.log(exercise);
    this.currentExercise = exercise;
    // will need to replace the 0 index below with numOfRolls
    this.rounds.push(exercise.titles[0]);
    console.log(this.rounds);
  }

}

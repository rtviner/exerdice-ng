import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';
// import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  @Input() exercise: Exercise;
  

  constructor() {}

  ngOnInit() {

  }
  
  //needs input number to get exercise?
  // getExercise(): void {
  //   //get exercise by die number
  //   // let exNumber = ;
  //   this.exerciseService.getExercise(this.exNumber)
  //     .subscribe(exercise => this.exercise = exercise);
  // }
  

}

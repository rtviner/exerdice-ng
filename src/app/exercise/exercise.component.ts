import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent {
  @Input() exercise: Exercise;
  @Input() index: number;
  

  constructor() {}

  ngOnInit() {

  }
}

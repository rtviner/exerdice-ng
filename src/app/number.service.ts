import { Injectable } from '@angular/core';

import { ExerciseService } from './exercise.service';
import { RoundService } from './round.service';


@Injectable({
  providedIn: 'root'
})
export class NumberService {
  number: number;

  constructor(private exerciseService: ExerciseService, private roundService: RoundService) { }

  getNumber() {
    this.number = Math.floor(Math.random() * 6) +1;
    this.exerciseService.getExercise(this.number);
    return this.number;
  }
}

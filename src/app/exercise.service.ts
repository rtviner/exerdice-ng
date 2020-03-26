import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Exercise } from './exercise';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  private exercisesUrl = 'https://exerdice-backend.herokuapp.com/api/exercises';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.exercisesUrl)
      .pipe(
        catchError(this.handleError<Exercise[]>('getExercises', []))
      );
  }

  getExercise(id: number): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.get<Exercise>(url).pipe(
      catchError(this.handleError<Exercise>(`getExercise id=${id}`))
    );
  }
}

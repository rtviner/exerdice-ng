import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Encouragement } from './encouragement';

@Injectable({ providedIn: 'root' })
export class MessageService {
  length: number;
  
  private encouragementsUrl = 'https://exerdice-backend.herokuapp.com/api/encouragements';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getEncouragements(): Observable<Encouragement[]> {
    return this.http.get<Encouragement[]>(this.encouragementsUrl)
      .pipe(
        catchError(this.handleError<Encouragement[]>('getEncouragements',
        []))
      );
  }

  //this needs to be changed to getRandomEncouragement server side instead of using random number down here.
  getRandomEncouragement(): Observable<Encouragement> {
    
    const url = `${this.encouragementsUrl}/random`;
    return this.http.get<Encouragement>(url).pipe(
      catchError(this.handleError<Encouragement>('getRandomEncouragement'))
    );
  }
}

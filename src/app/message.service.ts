import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Encouragement } from './encouragement';
import { ENCOURAGEMENTS } from './mock-encouragements';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getEncouragements(): Observable<Encouragement[]> {
    return of (ENCOURAGEMENTS);
  }

  getEncouragement(): Observable<Encouragement> {
    let number = Math.floor(Math.random() * 6);
    return of (ENCOURAGEMENTS.find(encouragement => encouragement.id === number));
  }
}

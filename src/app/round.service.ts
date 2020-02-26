import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  rounds: string[] = [];

  add(round: string) {
    this.rounds.push(round);
  }
  
  clear(){
    this.rounds = [];
  }

  constructor() { }
}

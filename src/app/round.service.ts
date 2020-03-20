import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  totalRounds: number = 6;
  rounds: string[] = [];

  setTotalRounds(numOfRounds: number) {
    this.totalRounds = numOfRounds;
  }
  
  getCurrentRoundNumber() {
    return this.rounds.length + 1;
  }

  add(round: string) {
      this.rounds.push(round);
  }
  
  clear(){
    this.rounds = [];
  }

  constructor() { }
}

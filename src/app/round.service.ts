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

  //having the if statement here prevents new rounds from being added to the rounds array but doesnt prevent the exercise component from showing the exercise information for additional rounds
  add(round: string) {
      this.rounds.push(round);
  }
  
  clear(){
    this.rounds = [];
  }

  constructor() { }
}

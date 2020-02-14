import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.css']
})
export class RoundInfoComponent implements OnInit {
  @Input() rounds: string[];
  constructor() { }

  ngOnInit() {
  }

}

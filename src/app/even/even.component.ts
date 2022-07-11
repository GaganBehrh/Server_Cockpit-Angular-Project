import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // Here is the numer we are inputting it from outside
  @Input() inputNumber: number;
  constructor() { }

  ngOnInit(): void {
  }

}

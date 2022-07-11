import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
  styleUrls: ["./odd.component.css"],
})
export class OddComponent implements OnInit {
  // Here is the numer we are inputting it from outside
  @Input() inputNumber: number;
  constructor() {}
  ngOnInit(): void {}
}

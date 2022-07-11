import { Component, OnInit,Output,EventEmitter } from "@angular/core";
//import { EventEmitter } from "stream";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  interval;
 @Output() intervalStarted = new EventEmitter<Number>();
  lastNumber = 0;
  constructor() {}
  ngOnInit(): void {}
  incrementNumber() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
}

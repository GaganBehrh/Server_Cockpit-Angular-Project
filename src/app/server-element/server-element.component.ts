import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  // this element is accessible to outside components srvElement is an alias
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {}

  ngOnInit(): void {}
}

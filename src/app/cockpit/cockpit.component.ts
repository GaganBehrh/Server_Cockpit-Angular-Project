import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // to make them events emit out of the component thats why output
  @Output("srvCreated") serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  //newServerName = "";
  newServerContent = "";
  constructor() {}

  ngOnInit(): void {}
  // this is what the function emits
  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }
}

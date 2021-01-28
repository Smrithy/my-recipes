import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = 'Default';
  newServerContent = 'Default';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement){
    console.log(this.serverContentInput);
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value + 's',
    //   serverContent: this.newServerContent});

    this.serverCreated.emit({
      serverName: serverNameInput.value + 's',
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: serverNameInput.value + 'b', 
      serverContent: this.newServerContent});
  }
}

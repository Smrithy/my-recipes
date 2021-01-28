import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string , name: string, content: string};
  @ContentChild ('contentParagraph') contentParagraph:  ElementRef;

  constructor() { 
    console.log('constructed called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-recipes';
  serverElements =[{type: 'server', name: 'Test server', content: 'Test Content'}
          ];
  @Input() loadedFeature: string ='recipe';       

  onNavigate (feature){
    this.loadedFeature= feature;
  }

  onServerAdded(eventData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'server',
      name: eventData.serverName,
      content: eventData.serverContent
    })
  }

  onBlueprintAdded(eventData:{serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent + 'blue'
    })
  }
}

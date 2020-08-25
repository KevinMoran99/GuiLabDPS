import { Component, OnInit } from '@angular/core';
import {Scrum} from './scrum';
import {ScrumService} from './scrum.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <div class="media">
        <div class="media-left">
          <a href="#">

            <img src="https://1.bp.blogspot.com/-EhgIDI-lkvc/VeQKGu13JOI/AAAAAAAAALk/stFLi1Yh81I/s320/Champions%2BLeague.png">
          </a>
        </div>
        <div class="media-body">
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <h2>Equipos</h2>
        <ul class="scrums">
          <li *ngFor="let scrum of scrums" [class.selected]="scrum === selectedScrum" (click)="onSelect(scrum)">
            <span class="badge">{{scrum.id}}</span>{{scrum.name}}
          </li>
        </ul>
      </div>
      <div class="col-sm-8">
        <my-scrum-detail [scrum]="selectedScrum"></my-scrum-detail>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ScrumService]
})

export class AppComponent {
  title = 'Liga de Campeones de la UEFA';
  scrums: Scrum[];
  selectedScrum: Scrum;

  constructor(private scrumservice:ScrumService) { }

  getScrums():void{
    this.scrumservice.getScrums().then(scrums => this.scrums = scrums);
  }

  ngOnInit():void{
    this.getScrums();
  }
    
  onSelect(scrum: Scrum): void {
    this.selectedScrum = scrum;
  }
}

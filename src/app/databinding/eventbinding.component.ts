import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.clicked.emit('Neuer Text');
  }
}

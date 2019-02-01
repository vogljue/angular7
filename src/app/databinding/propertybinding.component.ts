import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color = 'red';
  
  constructor() { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.color = 'green';
    }, 3000)
  }

}

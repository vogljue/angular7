import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color = 'red';
  switch = true;
  elemente = [1, 2, 3, 4, 5];
  value = 100;
  
  constructor() { 
  }

  ngOnInit() {
    setTimeout(() => {
      this.color = 'green';
    }, 3000)
  }

}

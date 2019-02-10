import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log(this.selectedRecipe);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 
      'Sehr lecker', 
      'https://static.essen-und-trinken.de/bilder/e9/b1/7321/galleryimage/ed956d4fa02f282fabdb282aa6bc6447.jpg',
      [
        new Ingredient('Schnitzel',1),
        new Ingredient('Pommes',10),
      ]),
    new Recipe(
      'Salat', 
      'Immer frisch', 
      'https://img.chefkoch-cdn.de/ck.de/rezepte/84/84007/830342-960x720-power-salat.jpg',
      [
        new Ingredient('Feldsalat',1),
      ]),
  ];

  selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

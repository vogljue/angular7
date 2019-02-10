import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeroscoreComponent } from './heroscore/heroscore.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipedetail:id', component: RecipeDetailComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'heroscore', component: HeroscoreComponent },
  { path: 'databinding', component: DatabindingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

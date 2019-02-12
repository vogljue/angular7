import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeroscoreComponent } from './heroscore/heroscore.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipedetail:id', component: RecipeDetailComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'heroscore', component: HeroscoreComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

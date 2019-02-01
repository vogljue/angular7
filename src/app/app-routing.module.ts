import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroscoreComponent } from './heroscore/heroscore.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroscore', pathMatch: 'full' },
  { path: 'heroscore', component: HeroscoreComponent },
  { path: 'databinding', component: DatabindingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

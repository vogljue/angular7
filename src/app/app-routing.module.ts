import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroscoreComponent } from './heroscore/heroscore.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroscore', component: HeroscoreComponent },
  { path: 'databinding', component: DatabindingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

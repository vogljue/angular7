import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroscoreComponent } from './heroscore/heroscore.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroscore', pathMatch: 'full' },
  { path: 'heroscore', component: HeroscoreComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

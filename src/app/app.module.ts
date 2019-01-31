import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HeroscoreComponent } from './heroscore/heroscore.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroscoreComponent
  ],
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AppMaterialModule
 ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

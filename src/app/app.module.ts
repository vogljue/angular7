import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HeroscoreComponent } from './heroscore/heroscore.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroscoreComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component Modules
import { NavigationModule } from '../app/modules/navigation/navigation.module';
import { LandingModule } from '../app/modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

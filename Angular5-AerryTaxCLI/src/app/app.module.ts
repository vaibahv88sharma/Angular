import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
//import { MainNavigationModule } from './main-navigation/main-navigation.module';
import { SharedSectionModule } from './shared/shared-section.module';

import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ContactGuardService } from './shared/route-guard/contact/contact-guard.service';
//import {CapitalizePipe} from './shared/pipe/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    //CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MainNavigationModule,
    HomeModule,
    SharedSectionModule,
    //PipeModule.forRoot()
  ],
  providers: [
    ContactGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

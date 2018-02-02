import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MainNavigationComponent } from './main-navigation.component';
//import { HomeDataService } from '../shared/services/home-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainNavigationComponent
  ]
})
export class MainNavigationModule { }

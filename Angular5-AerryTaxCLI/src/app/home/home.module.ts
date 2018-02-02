import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeDetailsTilesComponent } from './home-details-tiles/home-details-tiles.component';
import { HomeDetailsTileTabComponent } from './home-details-tile-tab/home-details-tile-tab.component';
import { SharedSectionModule } from '../shared/shared-section.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedSectionModule
  ],
  declarations: [
    //HomeComponent,
    HomeDetailsComponent, HomeDetailsTilesComponent, HomeDetailsTileTabComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeDataService } from './services/home-data.service';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { UselessPipePipe } from './pipe/useless-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HomeDataService
  ],
  declarations: [
    CapitalizePipe,
    UselessPipePipe
  ]
  ,exports:[
    CapitalizePipe,
    UselessPipePipe
  ]
})
export class SharedSectionModule { }

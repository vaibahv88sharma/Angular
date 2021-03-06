import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

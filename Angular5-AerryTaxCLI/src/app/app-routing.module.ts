import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { ContactGuardService } from './shared/route-guard/contact/contact-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule',
    //canDeactivate: [ContactGuardService]
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule'
  },
  {
    path: 'disclaimer',
    loadChildren: './disclaimer/disclaimer.module#DisclaimerModule'
  },
  {
    path: 'taxation',
    loadChildren: './taxation/taxation.module#TaxationModule'
  },  
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
      // , enableTracing: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

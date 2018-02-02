import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxationComponent } from './taxation-default/taxation.component';
import { TaxationResolverService } from '../shared/route-resolver/taxation-resolver.service';
import { TaxationServicesComponent } from './taxation-services/taxation-services.component';

const routes: Routes = [
  {
    path: '',
    component: TaxationComponent,
    //resolve:{ tax: TaxationResolverService },
    children: [
      {
        path: ':id',
        component: TaxationServicesComponent,
        resolve: { tax: TaxationResolverService }
      }
    ]    
  }
/*   {
    path: '',
    component: TaxationComponent,
  },
  {
    path: '',
    component: TaxationComponent,
    resolve:{ tax: TaxationResolverService },
  } */  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxationRoutingModule { }

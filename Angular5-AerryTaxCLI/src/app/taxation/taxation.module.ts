import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaxationRoutingModule } from './taxation-routing.module';
import { TaxationComponent } from './taxation-default/taxation.component';
import { TaxationServicesComponent } from './taxation-services/taxation-services.component';
import { TaxationResolverService } from '../shared/route-resolver/taxation-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaxationRoutingModule
  ],
  declarations: [TaxationComponent, TaxationServicesComponent],
  providers: [TaxationResolverService]
})
export class TaxationModule { }

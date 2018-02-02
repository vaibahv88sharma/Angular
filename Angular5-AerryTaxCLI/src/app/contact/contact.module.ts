import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactSubmitComponent } from './contact-submit/contact-submit.component';
import { ContactGuardService } from '../shared/route-guard/contact/contact-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent, ContactSubmitComponent],
  providers: [ContactGuardService]
})
export class ContactModule { }

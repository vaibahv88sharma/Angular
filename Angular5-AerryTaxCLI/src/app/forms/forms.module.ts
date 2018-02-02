import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms'; // Reactive Forms

import { FormsRoutingModule } from './forms-routing.module';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { CompanyRegisterNestedFormComponent } from './company-register-nested-form/company-register-nested-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  declarations: [
    CompanyRegisterComponent,
    CompanyRegisterNestedFormComponent
  ]
})
export class FormsModule { }

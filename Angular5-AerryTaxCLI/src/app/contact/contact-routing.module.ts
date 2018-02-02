import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactGuardService } from '../shared/route-guard/contact/contact-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [ContactGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

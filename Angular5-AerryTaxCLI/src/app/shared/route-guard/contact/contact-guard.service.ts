import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { ContactComponent } from '../../../contact/contact.component';
import { ContactSubmitComponent } from '../../../contact/contact-submit/contact-submit.component';

@Injectable()
export class ContactGuardService implements CanDeactivate<ContactComponent>{

  constructor() { }

  canDeactivate(component: ContactComponent): boolean {
    
    /*     if (component.isDirty) {
          let productName = component.product.productName || 'New Product';
          return confirm(`Navigate away and lose all changes to ${productName}?`);
      } */
      //debugger;
/*     if (component.isDirty) {
      console.log('isDirty');
      return confirm(`Navigate away and lose all changes to ?`);
      //return false;
    } */
    if (!component.isValid) {
      //console.log(component);
      return confirm(`Navigate away and lose all changes to ?`);
    }
  }

}

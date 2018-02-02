import { Component, OnInit, Output, DoCheck, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';  //Reactive Forms

function emailMatcher(c: AbstractControl){
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  //debugger;
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match' : true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
          return { 'range': true };
      }
    return null;
  };
}

@Component({
  selector: 'arytx-contact-submit',
  templateUrl: './contact-submit.component.html',
  styleUrls: ['./contact-submit.component.scss']
})
export class ContactSubmitComponent implements OnInit, DoCheck {

  @Output() isValidContactSubmit = new EventEmitter<boolean>();;
  contactForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    get isDirty(): boolean {      
      console.log('isDirty');
      return this.contactForm.valid;
      //return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
    }

    ngOnInit(): void {
      this.contactForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        emailGroup: this.fb.group({
          email: ['', [Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],
          confirmEmail: ['', Validators.required],
        }, { validator: emailMatcher }),
        phone: '',
        notification: 'email',
        rating: ['', ratingRange(1, 5)],
      });
    }
    ngDoCheck() {
      this.isValidContactSubmit.emit(this.contactForm.valid);
    }
      save() {
        //debugger;
          console.log(this.contactForm);
          console.log('Saved: ' + JSON.stringify(this.contactForm.value));
      }

      setNotification(notifyVia: string): void {
          const phoneControl = this.contactForm.get('phone');
          if (notifyVia === 'text') {
              phoneControl.setValidators(Validators.required);
          } else {
              phoneControl.clearValidators();
          }
          phoneControl.updateValueAndValidity();
      }


}

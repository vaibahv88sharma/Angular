import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'arytx-company-register-nested-form',
  templateUrl: './company-register-nested-form.component.html',
  styleUrls: ['./company-register-nested-form.component.scss']
})
export class CompanyRegisterNestedFormComponent {

  @Input('group')
  public directorForm: FormGroup;

  @Input('directorPositionFG')
  public directorPositionChildArray: FormGroup;

  constructor() { }

}

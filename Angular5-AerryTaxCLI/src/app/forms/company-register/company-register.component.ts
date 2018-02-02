import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { CompanyRegister } from '../../shared/data-model/company-register';
import { AppSettings } from '../../shared/app.settings';
import { HomeDataService } from '../../shared/services/home-data.service';

@Component({
  selector: 'arytx-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {

  crForm: FormGroup;
  public cr: CompanyRegister = new CompanyRegister();
  private crRef: CompanyRegister;

    get getShareHoldersArray(): FormArray{
        return <FormArray>this.crForm.get('shareHoldersArray');
    }
    get getDirectorArray(): FormArray{
        return <FormArray>this.crForm.get('directorInfoGroupArray');
    }
    get getDirectorPosition(): FormArray{
        return <FormArray>this.crForm.get('directorPositionArray');
    }

  emailMessage: string;

    private validationMessages = {
        required: 'Please enter an email address',
        pattern: 'Please enter a valid email address',
    };

    private formValidation: Array<any> = [];
    private formControlNames = {
      name1 : {
          required: 'Please enter an name1 address',
          minlength: 'Minimum Length Should be 2'
      },
      name2 : {
          required: 'Please enter an name2 address',
          minlength: 'Minimum Length Should be 2'
      },
      commencementDate: {
          required: 'Please enter the Commencement Date.'
      },
      directorEmail : {
          required: 'Please enter an email address',
          pattern: 'Please enter a valid email address',
      },
      directorSurname : {
          required: 'Please enter Surname.'
      },
      directorPhone : {
          required: 'Please enter phone number.'
      }
  };

    constructor(private fb: FormBuilder, private hds: HomeDataService) {
  //constructor(private fb: FormBuilder, private appSettings: AppSettings, private hds: HomeDataService) {
    }

  ngOnInit(): void {
    this.crForm = this.fb.group({
        nameGroup : this.fb.group({
        name1: ['', [Validators.required, Validators.minLength(2)]],
        name2: ['', [Validators.required, Validators.minLength(2)]],
        }),
        commencementDate: ['', Validators.required],
        companyType: 'public',
        liability: 'shares',
        directorInfoGroupArray: this.fb.array([ this.buildDirector() ]),
        shareHoldersArray: this.fb.array([ this.buildShareholder() ]),
    });

    this.setMessageOnForm(this.crForm);

    this.hds.getTaxation(AppSettings.SERVICES_PROVIDED).subscribe(
        data => {
            this.formValidation = data.formValidation;
        },
        err => {//debugger; 
            console.log('get error: ', err); }
    );

  }

  save() {
    //debugger;
      console.log(this.crForm);
      console.log('Saved: ' + JSON.stringify(this.crForm.value));
  }

  addDirector(): void{
      this.getDirectorArray.push(this.buildDirector());
  }
  removeDirector(i: number) {
      this.getDirectorArray.controls.splice(i, 1);
  }

  buildDirector(): FormGroup{
    return this.fb.group({
            directorFirstname: '',
            directorSurname: '',
            directorTfn: '',
            directorPhone: '',
            directorEmail: '',
            directorDl: '',
            directorDob: '',
            directorBirthPlace: '',
            directorAddress: '',
           directorPositionArray: this.fb.group({
                                           posDirector: '',
                                           posSecretary: '',
                                           posPublicOfficer: '',
                                   })
    });
  }

  buildDirectorPosition(): FormGroup{
      return this.fb.group({
              posDirector: '',
              posSecretary: '',
              posPublicOfficer: '',
      });
  }

  addShareholder(): void{
    this.getShareHoldersArray.push(this.buildShareholder());
  }
  buildShareholder(): FormGroup{
      return this.fb.group({
          sharesNo: '',
          shareHolderName: '',
          shareHolderAddress: ''
      });
  }

  setMessageOnForm(c: FormGroup): void {
    Object.keys(c.controls).forEach((name) =>
    {
        const formControl = c.controls[name];
        if (formControl instanceof FormGroup) {
            this.setMessageOnForm(formControl);
        } else {
            if (formControl instanceof FormArray) {
                this.setMessageOnForm(<FormGroup>formControl.controls[0]);
            }
                formControl.valueChanges.debounceTime(1000).subscribe(value =>
                    {
                        this.setMessageOnControl(formControl, name);
                    }
                );
        }
    });


  }

  setMessageOnControl(c: AbstractControl, controlName: string): void {

    Object.keys(this.formValidation).forEach((name) =>
    {
        if (controlName === name)
        {
            this.cr[name] = '';
            if ((c.touched || c.dirty) && c.errors) {
                this.cr[name] = Object.keys(c.errors).map(key =>
                    this.formValidation[name][key]).join(' ');
            }
        }
    });
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
        this.emailMessage = Object.keys(c.errors).map(key =>
            this.validationMessages[key]).join(' ');
    }

    //debugger;
    let controlName = null;
    const parent = c['_parent'];

    Object.keys(parent.controls).forEach((name) =>
    {
        if (c === parent.controls[name])
        {
            controlName = name;
        }
    });

  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.crForm.get('phone');
    if (notifyVia === 'text') {
        phoneControl.setValidators(Validators.required);
    } else {
        phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  saveForm(formSubmitted: FormGroup): void{
      //debugger;
      console.log(formSubmitted);
  }

}

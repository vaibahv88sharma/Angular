import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

import { CompanyRegisterComponent } from './company-register.component';
import {CompanyRegisterNestedFormComponent} from '../company-register-nested-form/company-register-nested-form.component';
import { HomeDataService } from '../../shared/services/home-data.service';

describe('CompanyRegisterComponent', () => {
  let component: CompanyRegisterComponent;
  let fixture: ComponentFixture<CompanyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompanyRegisterComponent,
        CompanyRegisterNestedFormComponent
      ],
      imports : [
        ReactiveFormsModule,
        HttpClientModule//, HttpClient, HttpHandler
      ],
      providers: [
        HomeDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

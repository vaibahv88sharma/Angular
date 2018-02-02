import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { TaxationServicesComponent } from './taxation-services.component';

describe('TaxationServicesComponent', () => {
  let component: TaxationServicesComponent;
  let fixture: ComponentFixture<TaxationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxationServicesComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubmitComponent } from './contact-submit.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactSubmitComponent', () => {
  let component: ContactSubmitComponent;
  let fixture: ComponentFixture<ContactSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSubmitComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import { HomeDataService } from './shared/services/home-data.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MainNavigationComponent
      ],
      providers: [
        HomeDataService,
        HttpClientModule, HttpClient, HttpHandler
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'arytx'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('arytx');
  }));
  //it('should render title in a h1 tag', async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('h1').textContent).toContain('Welcome to arytx!');
  //}));
});

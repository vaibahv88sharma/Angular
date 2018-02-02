import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { Input } from '@angular/core';

import { HomeDetailsTileTabComponent } from './home-details-tile-tab.component';
import { HomeDetailsTilesComponent } from '../home-details-tiles/home-details-tiles.component';

describe('HomeDetailsTileTabComponent', () => {
  let component: HomeDetailsTileTabComponent;
  let fixture: ComponentFixture<HomeDetailsTileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeDetailsTileTabComponent,
        //HomeDetailsTilesComponent
       ],
      //imports: [Input]
      providers: [
        HomeDetailsTilesComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailsTileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

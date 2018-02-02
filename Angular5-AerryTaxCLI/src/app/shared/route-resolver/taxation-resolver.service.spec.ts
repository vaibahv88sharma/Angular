import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TaxationResolverService } from './taxation-resolver.service';
import { HomeDataService } from '../services/home-data.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('TaxationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        TaxationResolverService, HomeDataService,
        HomeDataService,
        HttpClient,
        HttpHandler        
      ]
    });
  });

  it('should be created', inject([TaxationResolverService], (service: TaxationResolverService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClient } from '@angular/common/http';

describe('LocationService', () => {
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpSpy }
    ]
  }));

  it('should be created', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
});

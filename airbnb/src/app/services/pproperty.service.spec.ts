import { TestBed } from '@angular/core/testing';

import { PpropertyService } from './pproperty.service';

describe('PpropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PpropertyService = TestBed.get(PpropertyService);
    expect(service).toBeTruthy();
  });
});

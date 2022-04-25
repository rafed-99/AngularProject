import { TestBed } from '@angular/core/testing';

import { AbonementService } from './abonement.service';

describe('AbonementService', () => {
  let service: AbonementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

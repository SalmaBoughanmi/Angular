import { TestBed } from '@angular/core/testing';

import { DiplomesService } from './diplomes.service';

describe('DiplomesService', () => {
  let service: DiplomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

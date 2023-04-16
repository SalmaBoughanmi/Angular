import { TestBed } from '@angular/core/testing';

import { ArchivesService } from './archives.service';

describe('ArchivesService', () => {
  let service: ArchivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

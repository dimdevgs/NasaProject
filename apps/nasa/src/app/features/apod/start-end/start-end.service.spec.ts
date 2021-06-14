import { TestBed } from '@angular/core/testing';

import { StartEndService } from './start-end.service';

describe('StartEndService', () => {
  let service: StartEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

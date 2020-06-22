import { TestBed } from '@angular/core/testing';

import { OlderSessionsService } from './older-sessions.service';

describe('OlderSessionsService', () => {
  let service: OlderSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlderSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

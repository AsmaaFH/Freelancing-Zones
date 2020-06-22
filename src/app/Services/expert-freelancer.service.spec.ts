import { TestBed } from '@angular/core/testing';

import { ExpertFreelancerService } from './expert-freelancer.service';

describe('ExpertFreelancerService', () => {
  let service: ExpertFreelancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertFreelancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

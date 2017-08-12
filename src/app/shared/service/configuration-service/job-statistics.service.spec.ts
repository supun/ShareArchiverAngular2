import { TestBed, inject } from '@angular/core/testing';

import { JobStatisticsService } from './job-statistics.service';

describe('JobStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobStatisticsService]
    });
  });

  it('should ...', inject([JobStatisticsService], (service: JobStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});

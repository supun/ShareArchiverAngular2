import { TestBed, inject } from '@angular/core/testing';

import { JobManagementService } from './job-management.service';

describe('JobManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobManagementService]
    });
  });

  it('should ...', inject([JobManagementService], (service: JobManagementService) => {
    expect(service).toBeTruthy();
  }));
});

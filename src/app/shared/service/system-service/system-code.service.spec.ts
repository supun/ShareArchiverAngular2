import { TestBed, inject } from '@angular/core/testing';

import { SystemCodeService } from './system-code.service';

describe('SystemCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemCodeService]
    });
  });

  it('should ...', inject([SystemCodeService], (service: SystemCodeService) => {
    expect(service).toBeTruthy();
  }));
});

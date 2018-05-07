import { TestBed, inject } from '@angular/core/testing';

import { SharedStatusService } from './shared-status.service';

describe('SharedStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedStatusService]
    });
  });

  it('should be created', inject([SharedStatusService], (service: SharedStatusService) => {
    expect(service).toBeTruthy();
  }));
});

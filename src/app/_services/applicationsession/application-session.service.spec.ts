import { TestBed, inject } from '@angular/core/testing';

import { ApplicationSessionService } from './application-session.service';

describe('ApplicationSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationSessionService]
    });
  });

  it('should ...', inject([ApplicationSessionService], (service: ApplicationSessionService) => {
    expect(service).toBeTruthy();
  }));
});

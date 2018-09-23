import { TestBed } from '@angular/core/testing';

import { UnauthenticateGuardService } from './unauthenticate-guard.service';

describe('UnauthenticateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnauthenticateGuardService = TestBed.get(UnauthenticateGuardService);
    expect(service).toBeTruthy();
  });
});

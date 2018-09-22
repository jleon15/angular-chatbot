import { TestBed } from '@angular/core/testing';

import { AuthenticateGuardService } from './authenticate-guard.service';

describe('AuthenticateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateGuardService = TestBed.get(AuthenticateGuardService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClientSignUpService } from './client-sign-up.service';

describe('ClientSignUpService', () => {
  let service: ClientSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

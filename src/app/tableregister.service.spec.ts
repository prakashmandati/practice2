import { TestBed } from '@angular/core/testing';

import { TableRegisterService } from './tableregister.service';

describe('RegisterService', () => {
  let service: TableRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

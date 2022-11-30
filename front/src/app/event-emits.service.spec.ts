import { TestBed } from '@angular/core/testing';

import { EventEmitsService } from './event-emits.service';

describe('EventEmitsService', () => {
  let service: EventEmitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

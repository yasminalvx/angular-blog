/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarvelEventsService } from './marvel-events.service';

describe('Service: MarvelEvents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelEventsService]
    });
  });

  it('should ...', inject([MarvelEventsService], (service: MarvelEventsService) => {
    expect(service).toBeTruthy();
  }));
});

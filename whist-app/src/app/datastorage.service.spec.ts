/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatastorageService } from './datastorage.service';

describe('DatastorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatastorageService]
    });
  });

  it('should ...', inject([DatastorageService], (service: DatastorageService) => {
    expect(service).toBeTruthy();
  }));
});

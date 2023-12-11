import { TestBed } from '@angular/core/testing';

import { ItemHttpService } from './item-http-service.service';

describe('ItemHttpServiceService', () => {
  let service: ItemHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getItems shoud return 2 items', () => {
    service.getItems().subscribe(items => {
      expect(items?.length).toBe(2);
    });
  });
});

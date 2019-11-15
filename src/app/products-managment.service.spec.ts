import { TestBed } from '@angular/core/testing';

import { ProductsManagmentService } from './products-managment.service';

describe('ProductsManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsManagmentService = TestBed.get(ProductsManagmentService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeSystemComponent } from './cake-system.component';

describe('CakeSystemComponent', () => {
  let component: CakeSystemComponent;
  let fixture: ComponentFixture<CakeSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

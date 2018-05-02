import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderchangedateComponent } from './orderchangedate.component';

describe('OrderchangedateComponent', () => {
  let component: OrderchangedateComponent;
  let fixture: ComponentFixture<OrderchangedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderchangedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderchangedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

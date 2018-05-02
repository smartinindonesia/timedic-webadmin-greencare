import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetaileditorComponent } from './orderdetaileditor.component';

describe('OrderdetaileditorComponent', () => {
  let component: OrderdetaileditorComponent;
  let fixture: ComponentFixture<OrderdetaileditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetaileditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetaileditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfixedpricestatusComponent } from './orderfixedpricestatus.component';

describe('OrderfixedpricestatusComponent', () => {
  let component: OrderfixedpricestatusComponent;
  let fixture: ComponentFixture<OrderfixedpricestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderfixedpricestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfixedpricestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

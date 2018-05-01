import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderprepaidpricestatusComponent } from './orderprepaidpricestatus.component';

describe('OrderprepaidpricestatusComponent', () => {
  let component: OrderprepaidpricestatusComponent;
  let fixture: ComponentFixture<OrderprepaidpricestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderprepaidpricestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderprepaidpricestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

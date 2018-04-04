import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpriceeditorComponent } from './orderpriceeditor.component';

describe('OrderpriceeditorComponent', () => {
  let component: OrderpriceeditorComponent;
  let fixture: ComponentFixture<OrderpriceeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpriceeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpriceeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

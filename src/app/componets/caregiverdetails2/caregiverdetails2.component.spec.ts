import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caregiverdetails2Component } from './caregiverdetails2.component';

describe('Caregiverdetails2Component', () => {
  let component: Caregiverdetails2Component;
  let fixture: ComponentFixture<Caregiverdetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caregiverdetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caregiverdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

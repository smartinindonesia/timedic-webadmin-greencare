import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverdetailsComponent } from './caregiverdetails.component';

describe('CaregiverdetailsComponent', () => {
  let component: CaregiverdetailsComponent;
  let fixture: ComponentFixture<CaregiverdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

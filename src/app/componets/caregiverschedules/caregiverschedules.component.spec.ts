import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverschedulesComponent } from './caregiverschedules.component';

describe('CaregiverschedulesComponent', () => {
  let component: CaregiverschedulesComponent;
  let fixture: ComponentFixture<CaregiverschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

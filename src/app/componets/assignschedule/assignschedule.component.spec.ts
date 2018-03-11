import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignscheduleComponent } from './assignschedule.component';

describe('AssignscheduleComponent', () => {
  let component: AssignscheduleComponent;
  let fixture: ComponentFixture<AssignscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

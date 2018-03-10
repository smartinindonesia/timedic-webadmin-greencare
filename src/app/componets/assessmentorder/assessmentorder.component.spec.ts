import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentorderComponent } from './assessmentorder.component';

describe('AssessmentorderComponent', () => {
  let component: AssessmentorderComponent;
  let fixture: ComponentFixture<AssessmentorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

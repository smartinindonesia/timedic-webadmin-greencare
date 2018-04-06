import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpatientsComponent } from './userpatients.component';

describe('UserpatientsComponent', () => {
  let component: UserpatientsComponent;
  let fixture: ComponentFixture<UserpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

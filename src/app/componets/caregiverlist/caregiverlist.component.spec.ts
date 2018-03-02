import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverlistComponent } from './caregiverlist.component';

describe('CaregiverlistComponent', () => {
  let component: CaregiverlistComponent;
  let fixture: ComponentFixture<CaregiverlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

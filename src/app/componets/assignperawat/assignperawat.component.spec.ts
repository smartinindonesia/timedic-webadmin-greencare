import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignperawatComponent } from './assignperawat.component';

describe('AssignperawatComponent', () => {
  let component: AssignperawatComponent;
  let fixture: ComponentFixture<AssignperawatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignperawatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignperawatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

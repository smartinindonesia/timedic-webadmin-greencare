import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeorderstatusComponent } from './changeorderstatus.component';

describe('ChangeorderstatusComponent', () => {
  let component: ChangeorderstatusComponent;
  let fixture: ComponentFixture<ChangeorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

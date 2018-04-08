import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregivereditComponent } from './caregiveredit.component';

describe('CaregivereditComponent', () => {
  let component: CaregivereditComponent;
  let fixture: ComponentFixture<CaregivereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregivereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregivereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

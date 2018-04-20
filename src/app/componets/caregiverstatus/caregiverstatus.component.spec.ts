import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverstatusComponent } from './caregiverstatus.component';

describe('CaregiverstatusComponent', () => {
  let component: CaregiverstatusComponent;
  let fixture: ComponentFixture<CaregiverstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

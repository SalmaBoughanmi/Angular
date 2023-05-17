import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEmployeComponent } from './dash-employe.component';

describe('DashEmployeComponent', () => {
  let component: DashEmployeComponent;
  let fixture: ComponentFixture<DashEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

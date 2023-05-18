import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRhComponent } from './dash-rh.component';

describe('DashRhComponent', () => {
  let component: DashRhComponent;
  let fixture: ComponentFixture<DashRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

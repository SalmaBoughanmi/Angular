import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDsComponent } from './dash-ds.component';

describe('DashDsComponent', () => {
  let component: DashDsComponent;
  let fixture: ComponentFixture<DashDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChefComponent } from './dash-chef.component';

describe('DashChefComponent', () => {
  let component: DashChefComponent;
  let fixture: ComponentFixture<DashChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

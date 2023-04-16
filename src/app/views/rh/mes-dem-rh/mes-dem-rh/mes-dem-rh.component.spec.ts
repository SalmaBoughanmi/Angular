import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemRhComponent } from './mes-dem-rh.component';

describe('MesDemRhComponent', () => {
  let component: MesDemRhComponent;
  let fixture: ComponentFixture<MesDemRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesDemRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

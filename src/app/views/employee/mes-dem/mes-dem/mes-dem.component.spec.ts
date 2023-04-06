import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemComponent } from './mes-dem.component';

describe('MesDemComponent', () => {
  let component: MesDemComponent;
  let fixture: ComponentFixture<MesDemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

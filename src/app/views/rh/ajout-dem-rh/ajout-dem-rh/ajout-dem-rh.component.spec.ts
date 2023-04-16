import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemRhComponent } from './ajout-dem-rh.component';

describe('AjoutDemRhComponent', () => {
  let component: AjoutDemRhComponent;
  let fixture: ComponentFixture<AjoutDemRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDemRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

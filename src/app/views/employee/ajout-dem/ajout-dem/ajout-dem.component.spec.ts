import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemComponent } from './ajout-dem.component';

describe('AjoutDemComponent', () => {
  let component: AjoutDemComponent;
  let fixture: ComponentFixture<AjoutDemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

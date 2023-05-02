import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemOffreComponent } from './ajout-dem-offre.component';

describe('AjoutDemOffreComponent', () => {
  let component: AjoutDemOffreComponent;
  let fixture: ComponentFixture<AjoutDemOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDemOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

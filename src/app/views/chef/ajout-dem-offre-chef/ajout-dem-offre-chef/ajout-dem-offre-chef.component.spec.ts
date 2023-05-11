import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemOffreChefComponent } from './ajout-dem-offre-chef.component';

describe('AjoutDemOffreChefComponent', () => {
  let component: AjoutDemOffreChefComponent;
  let fixture: ComponentFixture<AjoutDemOffreChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemOffreChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDemOffreChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOffreRhComponent } from './ajout-offre-rh.component';

describe('AjoutOffreRhComponent', () => {
  let component: AjoutOffreRhComponent;
  let fixture: ComponentFixture<AjoutOffreRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOffreRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOffreRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

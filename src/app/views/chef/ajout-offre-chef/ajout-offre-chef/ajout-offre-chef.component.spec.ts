import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOffreChefComponent } from './ajout-offre-chef.component';

describe('AjoutOffreChefComponent', () => {
  let component: AjoutOffreChefComponent;
  let fixture: ComponentFixture<AjoutOffreChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOffreChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOffreChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

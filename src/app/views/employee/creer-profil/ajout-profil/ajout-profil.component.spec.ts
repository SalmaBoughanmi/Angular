import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProfilComponent } from './ajout-profil.component';

describe('AjoutProfilComponent', () => {
  let component: AjoutProfilComponent;
  let fixture: ComponentFixture<AjoutProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

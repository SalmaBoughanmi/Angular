import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProfilRhComponent } from './creer-profil-rh.component';

describe('CreerProfilRhComponent', () => {
  let component: CreerProfilRhComponent;
  let fixture: ComponentFixture<CreerProfilRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerProfilRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerProfilRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProfilChefComponent } from './creer-profil-chef.component';

describe('CreerProfilChefComponent', () => {
  let component: CreerProfilChefComponent;
  let fixture: ComponentFixture<CreerProfilChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerProfilChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerProfilChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

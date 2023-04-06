import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirProfilChefComponent } from './voir-profil-chef.component';

describe('VoirProfilChefComponent', () => {
  let component: VoirProfilChefComponent;
  let fixture: ComponentFixture<VoirProfilChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirProfilChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirProfilChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

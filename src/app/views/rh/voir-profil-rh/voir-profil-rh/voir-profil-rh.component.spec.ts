import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirProfilRhComponent } from './voir-profil-rh.component';

describe('VoirProfilRhComponent', () => {
  let component: VoirProfilRhComponent;
  let fixture: ComponentFixture<VoirProfilRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirProfilRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirProfilRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDispoRhComponent } from './offres-dispo-rh.component';

describe('OffresDispoRhComponent', () => {
  let component: OffresDispoRhComponent;
  let fixture: ComponentFixture<OffresDispoRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresDispoRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresDispoRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

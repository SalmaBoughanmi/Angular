import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDispoComponent } from './offres-dispo.component';

describe('OffresDispoComponent', () => {
  let component: OffresDispoComponent;
  let fixture: ComponentFixture<OffresDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresDispoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

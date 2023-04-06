import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresDispoChefComponent } from './offres-dispo-chef.component';

describe('OffresDispoChefComponent', () => {
  let component: OffresDispoChefComponent;
  let fixture: ComponentFixture<OffresDispoChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresDispoChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresDispoChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

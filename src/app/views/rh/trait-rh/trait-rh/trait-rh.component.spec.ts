import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitRhComponent } from './trait-rh.component';

describe('TraitRhComponent', () => {
  let component: TraitRhComponent;
  let fixture: ComponentFixture<TraitRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

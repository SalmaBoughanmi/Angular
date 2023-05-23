import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitChefComponent } from './trait-chef.component';

describe('TraitChefComponent', () => {
  let component: TraitChefComponent;
  let fixture: ComponentFixture<TraitChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

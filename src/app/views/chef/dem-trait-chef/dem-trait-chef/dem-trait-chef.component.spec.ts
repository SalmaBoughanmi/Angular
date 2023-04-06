import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemTraitChefComponent } from './dem-trait-chef.component';

describe('DemTraitChefComponent', () => {
  let component: DemTraitChefComponent;
  let fixture: ComponentFixture<DemTraitChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemTraitChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemTraitChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

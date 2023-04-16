import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemTraitRhComponent } from './dem-trait-rh.component';

describe('DemTraitRhComponent', () => {
  let component: DemTraitRhComponent;
  let fixture: ComponentFixture<DemTraitRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemTraitRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemTraitRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

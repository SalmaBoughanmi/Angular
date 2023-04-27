import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemTraitDsComponent } from './dem-trait-ds.component';

describe('DemTraitDsComponent', () => {
  let component: DemTraitDsComponent;
  let fixture: ComponentFixture<DemTraitDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemTraitDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemTraitDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

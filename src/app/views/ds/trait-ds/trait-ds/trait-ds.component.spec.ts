import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitDsComponent } from './trait-ds.component';

describe('TraitDsComponent', () => {
  let component: TraitDsComponent;
  let fixture: ComponentFixture<TraitDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

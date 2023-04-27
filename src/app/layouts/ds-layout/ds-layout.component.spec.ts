import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLayoutComponent } from './ds-layout.component';

describe('DsLayoutComponent', () => {
  let component: DsLayoutComponent;
  let fixture: ComponentFixture<DsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

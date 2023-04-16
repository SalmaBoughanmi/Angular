import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhLayoutComponent } from './rh-layout.component';

describe('RhLayoutComponent', () => {
  let component: RhLayoutComponent;
  let fixture: ComponentFixture<RhLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

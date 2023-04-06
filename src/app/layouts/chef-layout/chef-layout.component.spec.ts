import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefLayoutComponent } from './chef-layout.component';

describe('ChefLayoutComponent', () => {
  let component: ChefLayoutComponent;
  let fixture: ComponentFixture<ChefLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

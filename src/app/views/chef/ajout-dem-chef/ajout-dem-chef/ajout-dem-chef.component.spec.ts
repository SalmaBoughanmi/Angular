import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDemChefComponent } from './ajout-dem-chef.component';

describe('AjoutDemChefComponent', () => {
  let component: AjoutDemChefComponent;
  let fixture: ComponentFixture<AjoutDemChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDemChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDemChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

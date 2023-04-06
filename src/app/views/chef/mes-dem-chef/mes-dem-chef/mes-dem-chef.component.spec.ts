import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemChefComponent } from './mes-dem-chef.component';

describe('MesDemChefComponent', () => {
  let component: MesDemChefComponent;
  let fixture: ComponentFixture<MesDemChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesDemChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoffreComponent } from './editoffre.component';

describe('EditoffreComponent', () => {
  let component: EditoffreComponent;
  let fixture: ComponentFixture<EditoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategorieDialogComponentComponent } from './delete-categorie-dialog-component.component';

describe('DeleteCategorieDialogComponentComponent', () => {
  let component: DeleteCategorieDialogComponentComponent;
  let fixture: ComponentFixture<DeleteCategorieDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategorieDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCategorieDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

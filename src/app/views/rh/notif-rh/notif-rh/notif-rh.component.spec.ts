import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifRhComponent } from './notif-rh.component';

describe('NotifRhComponent', () => {
  let component: NotifRhComponent;
  let fixture: ComponentFixture<NotifRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

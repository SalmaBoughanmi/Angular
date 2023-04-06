import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifChefComponent } from './notif-chef.component';

describe('NotifChefComponent', () => {
  let component: NotifChefComponent;
  let fixture: ComponentFixture<NotifChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

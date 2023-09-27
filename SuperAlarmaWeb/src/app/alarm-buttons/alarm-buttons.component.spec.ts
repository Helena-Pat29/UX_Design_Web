import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmButtonsComponent } from './alarm-buttons.component';

describe('AlarmButtonsComponent', () => {
  let component: AlarmButtonsComponent;
  let fixture: ComponentFixture<AlarmButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

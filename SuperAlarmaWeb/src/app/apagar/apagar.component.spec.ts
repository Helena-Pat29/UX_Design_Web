/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApagarComponent } from './apagar.component';

describe('ApagarComponent', () => {
  let component: ApagarComponent;
  let fixture: ComponentFixture<ApagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

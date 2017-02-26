/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimplesetupComponent } from './simplesetup.component';

describe('SimplesetupComponent', () => {
  let component: SimplesetupComponent;
  let fixture: ComponentFixture<SimplesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

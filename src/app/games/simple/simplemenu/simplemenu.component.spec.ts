/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimplemenuComponent } from './simplemenu.component';

describe('SimplemenuComponent', () => {
  let component: SimplemenuComponent;
  let fixture: ComponentFixture<SimplemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplewhistmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplewhistmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

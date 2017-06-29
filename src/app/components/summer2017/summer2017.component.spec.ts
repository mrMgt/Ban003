import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Summer2017Component } from './summer2017.component';

describe('Summer2017Component', () => {
  let component: Summer2017Component;
  let fixture: ComponentFixture<Summer2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Summer2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Summer2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

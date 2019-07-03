import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bulletin1Component } from './bulletin1.component';

describe('Bulletin1Component', () => {
  let component: Bulletin1Component;
  let fixture: ComponentFixture<Bulletin1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bulletin1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bulletin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { End.ScreenComponent } from './end.screen.component';

describe('End.ScreenComponent', () => {
  let component: End.ScreenComponent;
  let fixture: ComponentFixture<End.ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ End.ScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(End.ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

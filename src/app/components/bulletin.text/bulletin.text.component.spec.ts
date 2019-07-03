import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bulletin.TextComponent } from './bulletin.text.component';

describe('Bulletin.TextComponent', () => {
  let component: Bulletin.TextComponent;
  let fixture: ComponentFixture<Bulletin.TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bulletin.TextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bulletin.TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

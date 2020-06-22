import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderSessionsComponent } from './older-sessions.component';

describe('OlderSessionsComponent', () => {
  let component: OlderSessionsComponent;
  let fixture: ComponentFixture<OlderSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlderSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlderSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertRegistrationComponent } from './expert-registration.component';

describe('ExpertRegistrationComponent', () => {
  let component: ExpertRegistrationComponent;
  let fixture: ComponentFixture<ExpertRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

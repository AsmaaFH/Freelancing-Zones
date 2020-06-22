import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertFreelancersComponent } from './expert-freelancers.component';

describe('ExpertFreelancersComponent', () => {
  let component: ExpertFreelancersComponent;
  let fixture: ComponentFixture<ExpertFreelancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertFreelancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

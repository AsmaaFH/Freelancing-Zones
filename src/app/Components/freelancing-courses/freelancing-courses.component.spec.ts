import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancingCoursesComponent } from './freelancing-courses.component';

describe('FreelancingCoursesComponent', () => {
  let component: FreelancingCoursesComponent;
  let fixture: ComponentFixture<FreelancingCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancingCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

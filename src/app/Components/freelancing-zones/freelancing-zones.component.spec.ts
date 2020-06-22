import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancingZonesComponent } from './freelancing-zones.component';

describe('FreelancingZonesComponent', () => {
  let component: FreelancingZonesComponent;
  let fixture: ComponentFixture<FreelancingZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancingZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancingZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

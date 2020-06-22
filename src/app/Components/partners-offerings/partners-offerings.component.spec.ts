import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOfferingsComponent } from './partners-offerings.component';

describe('PartnersOfferingsComponent', () => {
  let component: PartnersOfferingsComponent;
  let fixture: ComponentFixture<PartnersOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOfferComponent } from './stat-offer.component';

describe('StatOfferComponent', () => {
  let component: StatOfferComponent;
  let fixture: ComponentFixture<StatOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

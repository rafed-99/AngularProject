import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonementComponent } from './abonement.component';

describe('AbonementComponent', () => {
  let component: AbonementComponent;
  let fixture: ComponentFixture<AbonementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

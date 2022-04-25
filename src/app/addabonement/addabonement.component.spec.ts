import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddabonementComponent } from './addabonement.component';

describe('AddabonementComponent', () => {
  let component: AddabonementComponent;
  let fixture: ComponentFixture<AddabonementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddabonementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddabonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

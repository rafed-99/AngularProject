import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateabonementComponent } from './updateabonement.component';

describe('UpdateabonementComponent', () => {
  let component: UpdateabonementComponent;
  let fixture: ComponentFixture<UpdateabonementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateabonementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateabonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

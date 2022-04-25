import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooomeComponent } from './hooome.component';

describe('HooomeComponent', () => {
  let component: HooomeComponent;
  let fixture: ComponentFixture<HooomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

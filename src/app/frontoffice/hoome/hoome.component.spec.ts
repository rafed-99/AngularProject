import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoomeComponent } from './hoome.component';

describe('HoomeComponent', () => {
  let component: HoomeComponent;
  let fixture: ComponentFixture<HoomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

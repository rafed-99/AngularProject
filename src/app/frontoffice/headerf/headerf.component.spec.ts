import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfComponent } from './headerf.component';

describe('HeaderfComponent', () => {
  let component: HeaderfComponent;
  let fixture: ComponentFixture<HeaderfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

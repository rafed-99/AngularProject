import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfComponent } from './footerf.component';

describe('FooterfComponent', () => {
  let component: FooterfComponent;
  let fixture: ComponentFixture<FooterfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

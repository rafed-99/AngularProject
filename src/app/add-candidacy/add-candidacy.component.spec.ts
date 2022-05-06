import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidacyComponent } from './add-candidacy.component';

describe('AddCandidacyComponent', () => {
  let component: AddCandidacyComponent;
  let fixture: ComponentFixture<AddCandidacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCandidacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

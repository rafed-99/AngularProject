import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyListComponent } from './candidacy-list.component';

describe('CandidacyListComponent', () => {
  let component: CandidacyListComponent;
  let fixture: ComponentFixture<CandidacyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidacyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidacyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementfrontComponent } from './abonnementfront.component';

describe('AbonnementfrontComponent', () => {
  let component: AbonnementfrontComponent;
  let fixture: ComponentFixture<AbonnementfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

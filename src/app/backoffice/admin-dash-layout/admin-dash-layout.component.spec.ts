import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashLayoutComponent } from './admin-dash-layout.component';

describe('AdminDashLayoutComponent', () => {
  let component: AdminDashLayoutComponent;
  let fixture: ComponentFixture<AdminDashLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

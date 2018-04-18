import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobComponent } from './admin.job.component';

describe('Admin.JobComponent', () => {
  let component: AdminJobComponent;
  let fixture: ComponentFixture<AdminJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

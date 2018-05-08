import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAplicationsComponent } from './admin-aplications.component';

describe('AdminAplicationsComponent', () => {
  let component: AdminAplicationsComponent;
  let fixture: ComponentFixture<AdminAplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

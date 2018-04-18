import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLinksComponent } from './admin.links.component';

describe('Admin.LinksComponent', () => {
  let component: AdminLinksComponent;
  let fixture: ComponentFixture<AdminLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyManagementComponent } from './user-company-management.component';

describe('UserCompanyManagementComponent', () => {
  let component: UserCompanyManagementComponent;
  let fixture: ComponentFixture<UserCompanyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompanyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

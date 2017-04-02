import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPolicyComponent } from './account-policy.component';

describe('AccountPolicyComponent', () => {
  let component: AccountPolicyComponent;
  let fixture: ComponentFixture<AccountPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

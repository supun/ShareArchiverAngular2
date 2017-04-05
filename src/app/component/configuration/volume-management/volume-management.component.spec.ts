import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeManagementComponent } from './volume-management.component';

describe('VolumeManagementComponent', () => {
  let component: VolumeManagementComponent;
  let fixture: ComponentFixture<VolumeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

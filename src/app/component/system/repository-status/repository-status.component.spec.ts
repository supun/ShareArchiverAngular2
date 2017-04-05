import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryStatusComponent } from './repository-status.component';

describe('RepositoryStatusComponent', () => {
  let component: RepositoryStatusComponent;
  let fixture: ComponentFixture<RepositoryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

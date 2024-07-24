import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersJobsListComponent } from './users-jobs-list.component';

describe('UsersJobsListComponent', () => {
  let component: UsersJobsListComponent;
  let fixture: ComponentFixture<UsersJobsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersJobsListComponent]
    });
    fixture = TestBed.createComponent(UsersJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

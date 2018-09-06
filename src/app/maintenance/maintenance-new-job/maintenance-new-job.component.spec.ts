import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceNewJobComponent } from './maintenance-new-job.component';

describe('MaintenanceNewJobComponent', () => {
  let component: MaintenanceNewJobComponent;
  let fixture: ComponentFixture<MaintenanceNewJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceNewJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceNewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

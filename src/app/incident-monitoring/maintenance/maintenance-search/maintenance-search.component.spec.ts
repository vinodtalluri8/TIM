import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSearchComponent } from './maintenance-search.component';

describe('MaintenanceSearchComponent', () => {
  let component: MaintenanceSearchComponent;
  let fixture: ComponentFixture<MaintenanceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

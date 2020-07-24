import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageEditModalComponent } from './package-edit-modal.component';

describe('PackageEditModalComponent', () => {
  let component: PackageEditModalComponent;
  let fixture: ComponentFixture<PackageEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

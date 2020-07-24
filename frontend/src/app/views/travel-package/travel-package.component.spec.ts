import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPackageComponent } from './travel-package.component';

describe('TravelPackageComponent', () => {
  let component: TravelPackageComponent;
  let fixture: ComponentFixture<TravelPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

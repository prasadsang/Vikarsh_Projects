import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAWMATERIALComponent } from './raw-material.component';

describe('RAWMATERIALComponent', () => {
  let component: RAWMATERIALComponent;
  let fixture: ComponentFixture<RAWMATERIALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RAWMATERIALComponent]
    });
    fixture = TestBed.createComponent(RAWMATERIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

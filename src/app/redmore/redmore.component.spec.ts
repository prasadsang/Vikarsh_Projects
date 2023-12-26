import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedmoreComponent } from './redmore.component';

describe('RedmoreComponent', () => {
  let component: RedmoreComponent;
  let fixture: ComponentFixture<RedmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedmoreComponent]
    });
    fixture = TestBed.createComponent(RedmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

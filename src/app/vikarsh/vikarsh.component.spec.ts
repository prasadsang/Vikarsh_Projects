import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikarshComponent } from './vikarsh.component';

describe('VikarshComponent', () => {
  let component: VikarshComponent;
  let fixture: ComponentFixture<VikarshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VikarshComponent]
    });
    fixture = TestBed.createComponent(VikarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

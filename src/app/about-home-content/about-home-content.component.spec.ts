import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomeContentComponent } from './about-home-content.component';

describe('AboutHomeContentComponent', () => {
  let component: AboutHomeContentComponent;
  let fixture: ComponentFixture<AboutHomeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutHomeContentComponent]
    });
    fixture = TestBed.createComponent(AboutHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

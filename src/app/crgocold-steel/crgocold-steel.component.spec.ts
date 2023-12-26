import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrgocoldSteelComponent } from './crgocold-steel.component';

describe('CrgocoldSteelComponent', () => {
  let component: CrgocoldSteelComponent;
  let fixture: ComponentFixture<CrgocoldSteelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrgocoldSteelComponent]
    });
    fixture = TestBed.createComponent(CrgocoldSteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

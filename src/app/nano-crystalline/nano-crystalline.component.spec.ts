import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoCrystallineComponent } from './nano-crystalline.component';

describe('NanoCrystallineComponent', () => {
  let component: NanoCrystallineComponent;
  let fixture: ComponentFixture<NanoCrystallineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NanoCrystallineComponent]
    });
    fixture = TestBed.createComponent(NanoCrystallineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCartComponent } from './audio-cart.component';

describe('AudioCartComponent', () => {
  let component: AudioCartComponent;
  let fixture: ComponentFixture<AudioCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioCartComponent]
    });
    fixture = TestBed.createComponent(AudioCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

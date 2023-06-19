import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookDetailsComponent } from './audio-book-details.component';

describe('AudioBookDetailsComponent', () => {
  let component: AudioBookDetailsComponent;
  let fixture: ComponentFixture<AudioBookDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioBookDetailsComponent]
    });
    fixture = TestBed.createComponent(AudioBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

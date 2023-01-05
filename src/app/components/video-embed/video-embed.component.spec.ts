import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmbedComponent } from './video-embed.component';

describe('VideoEmbedComponent', () => {
  let component: VideoEmbedComponent;
  let fixture: ComponentFixture<VideoEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEmbedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

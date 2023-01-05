import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl(
          'https://www.youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl(
          'https://player.vimeo.com/video/' + this.key
        );
        break;
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

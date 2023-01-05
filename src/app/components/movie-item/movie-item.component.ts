import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() itemData: Movie | null = null;

  imagesSize = IMAGES_SIZES;

  ngOnInit(): void {}
}

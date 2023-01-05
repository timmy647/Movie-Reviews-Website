import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}

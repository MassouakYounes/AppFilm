import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiKey = '92b418e837b833be308bbfb1fb2aca1e';
  private baseUrl = 'https://api.themoviedb.org/3/discover/movie';
  constructor(private http: HttpClient) {}

  // Get the list of films
  getFilms(): Observable<any> {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`;
    return this.http.get(url);
  }

  // Get details of a specific film by ID
  getFilmDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}

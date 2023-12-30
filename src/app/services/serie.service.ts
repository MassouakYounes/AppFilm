import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = 'https://api.themoviedb.org/3/discover/tv';
  private apiKey = '92b418e837b833be308bbfb1fb2aca1e';

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`;
    return this.http.get(url);
  }

  getSeriesDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}

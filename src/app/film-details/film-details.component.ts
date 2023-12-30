import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';
import {FilmDetailsDialogComponent} from "../film-details-dialog/film-details-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SerieService} from "../services/serie.service";
import {SerieDetailsDialogComponent} from "../serie-details-dialog/serie-details-dialog.component"; // Import your film service

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  movieId!: number;
  film: any;
  serie: any;

  constructor(private route: ActivatedRoute,
              private filmService: FilmService,
              private serieService: SerieService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      if (params['type'] == 'movie'){
        this.filmService.getFilmDetails(this.movieId).subscribe((data) => {
          this.film = data;
          this.openFilmDialog(); // Appeler la boîte de dialogue une fois que les détails du film sont chargés
        });
      }
      if (params['type'] == 'serie'){
        this.serieService.getSeriesDetails(this.movieId).subscribe((data) => {
          this.serie = data;
          this.openSerieDialog(); // Appeler la boîte de dialogue une fois que les détails du film sont chargés
        });
      }

    });
  }

  openFilmDialog(): void {
    const dialogRef = this.dialog.open(FilmDetailsDialogComponent, {
      width: '60%', // Définir la largeur de la boîte de dialogue selon vos besoins
      data: this.film
    });
  }

  openSerieDialog(): void {
    const dialogRef = this.dialog.open(SerieDetailsDialogComponent, {
      width: '60%', // Définir la largeur de la boîte de dialogue selon vos besoins
      data: this.serie
    });
  }
}


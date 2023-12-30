import { Component, OnInit } from '@angular/core';
import {SerieService} from "../services/serie.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  seriesList: any[] = [];

  constructor(private seriesService: SerieService) {}

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.seriesService.getSeries().subscribe((data) => {
      this.seriesList = data.results;
    });
  }

}

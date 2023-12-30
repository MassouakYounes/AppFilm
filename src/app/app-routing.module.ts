import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import {FilmDetailsComponent} from "./film-details/film-details.component";
import {HomeComponent} from "./home/home.component";
import {SeriesComponent} from "./series/series.component";

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'movies', component: FilmListComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'filmDetails/:type/:id', component: FilmDetailsComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirige vers 'accueil' par défaut

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

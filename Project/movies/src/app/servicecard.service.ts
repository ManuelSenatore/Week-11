import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card, Post } from './all-component';

@Injectable({
  providedIn: 'root'
})
export class ServicecardService {

  url = 'http://localhost:4201/';
  arrayMovies: Card[] = [];
  arrayFavorites: any[] = [];
  arrayFavResults: any[] = [];

  sub = new BehaviorSubject<Card[]>([]);
  obs = this.sub.asObservable();

  subF = new BehaviorSubject<any[]>([]);
  obsF = this.subF.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.url + 'favorites').subscribe((fav) => {
      this.arrayFavorites = fav;
      this.subF.next(this.arrayFavorites);
    });
  }

  getArrayLiked(id: number| null) {
    this.arrayFavResults = []
    let movieId = this.arrayFavorites.filter((f) => f.userId == id);
    for(let i = 0; i < movieId.length; i++) {
     this.arrayFavResults.push(this.arrayMovies.filter(
      (res) => res.id == movieId[i].movieId))
    }
    return this.arrayFavResults;


  }

  getMovies(){
    this.http.get<Card[]>(this.url + 'movies-popular').subscribe((movies) => {
      this.arrayMovies = movies;
      this.sub.next(this.arrayMovies);
    });
  }
  getMoviesLiked(){
    this.http.get<any[]>(this.url + 'favorites').subscribe((fav) => {
      this.arrayFavorites = fav;
      this.subF.next(this.arrayFavorites);
    });
  }
}

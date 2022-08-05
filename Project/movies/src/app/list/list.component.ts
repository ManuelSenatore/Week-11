import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicecardService } from '../servicecard.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  arrayMovies: any[]= [];
  sub!: Subscription;

  constructor( private card$ : ServicecardService,) { }

  ngOnInit(): void {
    this.card$.getMovies()
    this.sub = this.card$.obs.subscribe((movie) => {
      this.arrayMovies = movie;
    })
  }

  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceauthService } from '../serviceauth.service';
import { ServicecardService } from '../servicecard.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favcards: any[] = [];

  subUser!: Subscription
  subMovie!: Subscription

  constructor(private card$: ServicecardService, private auth$: ServiceauthService) { }

  ngOnInit(): void {
    this.card$.getMoviesLiked()
    this.favcards = this.card$.getArrayLiked( this.auth$.userId)
    console.log(this.favcards);
  }

}

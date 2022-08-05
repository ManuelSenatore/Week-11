import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.scss']
})
export class FavouriteCardComponent implements OnInit {

  @Input() favcard!: any;
  constructor() { }

  ngOnInit(): void {
  }

}

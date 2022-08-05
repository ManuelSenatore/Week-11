import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photos } from '../photos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards!: Photos;

  @Output() editEvent = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<Photos>();

  constructor() { }

  ngOnInit(): void {
  }

  likePhoto(likes: boolean){
    this.editEvent.emit(likes)
  }

  deletePhoto(obj: Photos ) {
    this.deleteEvent.emit(obj)
  }

}

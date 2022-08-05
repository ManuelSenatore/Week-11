import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photos } from '../photos';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  cards:Photos [] = []

  carsdRequest!: Subscription

  x = 0;

  constructor(private photoSrv: PhotosService) { }

  ngOnInit(): void {
    this.carsdRequest = this.photoSrv.getTodos().subscribe((res)=>{
      this.cards = res
      console.log(this.cards)
    });

    this.photoSrv.counterObs.subscribe((e)=>{
      this.x = e
    })

  }

  ngOnDestroy(): void {
    this.carsdRequest.unsubscribe()
  }

  deletePhoto(obj: Photos){
    this.photoSrv.deleteTodo(obj).subscribe((res) =>{
      this.cards = this.cards.filter(c => c.id != obj.id)
    })
  }

  likePhoto(likes: boolean){
    this.photoSrv.addCounter()
  }

}

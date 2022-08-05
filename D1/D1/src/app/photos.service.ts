import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  cards:Photos [] = []

  counter = 0;

  counterSub = new Subject<number>();
  counterObs = this.counterSub.asObservable();

  obs!:Observable<number>

  constructor(private httpSrv:HttpClient) { }

  getTodos() {
    let obs = this.httpSrv.get<Photos[]>('http://localhost:3000/photos')
    return obs
  }

  deleteTodo(obj:Photos) {
    return this.httpSrv.delete<Photos[]>(`http://localhost:3000/photos/${obj.id}`)
  }

  addCounter(){
    this.counter++
    this.counterSub.next(this.counter)
  }
}

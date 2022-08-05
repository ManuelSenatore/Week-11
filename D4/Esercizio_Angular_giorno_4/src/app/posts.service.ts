import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Post } from './user';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'http://localhost:3000/posts';
  arrayPosts: Post[] = [];

  sub = new Subject<Post[]>();
  obs = this.sub.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.url).subscribe((posts) => {
      this.arrayPosts = posts;
      this.sub.next(this.arrayPosts);
    });
  }
}

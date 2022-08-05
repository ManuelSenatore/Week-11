import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrayPosts: Post[] = [];
  sub!: Subscription;

  constructor(private post$: PostsService) {}

  ngOnInit(): void {
    this.sub = this.post$.obs.subscribe((posts) => {
      this.arrayPosts = posts;
      console.log(posts);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../user';

@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.scss'],
})
export class PotsComponent implements OnInit {
  @Input() p!: Post;

  constructor() {}

  ngOnInit(): void {}
}

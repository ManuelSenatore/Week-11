import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthUser } from '../all-component';
import { ServiceauthService } from '../serviceauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged!: boolean | AuthUser;

  sub!: Subscription;

  constructor(private auth$: ServiceauthService) {}

  ngOnInit(): void {
    this.sub = this.auth$.authSub.subscribe((state) => {
      this.isLogged = state;
    });
  }

  logout(): void {
    this.auth$.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }
}

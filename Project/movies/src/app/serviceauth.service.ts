import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse, AuthUser, UserLogin, UserSignup } from './all-component';
import { ServicecardService } from './servicecard.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceauthService {


  url = 'http://localhost:4201/';

  logged = false;

  userId!: number | null

  //observable auth
  authSub = new BehaviorSubject<false | AuthUser>(false);
  authObs = this.authSub.asObservable();

  constructor(private http: HttpClient, private card$: ServicecardService) {
    this.authObs.subscribe((res) => {
      this.logged = res ? true : false;
    });
  }

  // metodi per l'autenticazione
  signUp(user: UserSignup) {
    this.http.post<AuthResponse>(this.url + 'signup', user).subscribe((res) => {
      console.log('signup OK');
      localStorage.setItem('token', res.accessToken);
      this.authSub.next(res.user);
    });
  }

  login(user: UserLogin) {
    this.http.post<AuthResponse>(this.url + 'login', user).subscribe((res) => {
      console.log('login OK');
      localStorage.setItem('token', res.accessToken);
      this.authSub.next(res.user);
      this.userId = res.user.id;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.authSub.next(false);
    this.userId = null;
    this.card$.sub.next([])
  }

  isAuth(): boolean {
    let t = localStorage.getItem('token');
    if (t) {
      return true;
    }
    return false;
  }

}

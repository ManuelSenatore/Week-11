import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthUser } from '../all-component';
import { ServiceauthService } from '../serviceauth.service';
import { ServicecardService } from '../servicecard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  isLogged!: boolean | AuthUser;
  error = false;

  sub!: Subscription;

  constructor(private auth$: ServiceauthService, private card$: ServicecardService,public fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.sub = this.auth$.authSub.subscribe((state) => {
      this.isLogged = state;
    });
  }

  login(): void {
    if (this.form.invalid) {
      console.log('not valid');
      this.error = true;
    } else {
      this.auth$.login(this.form.value);
      console.log(this.form.value);
      this.error = false;
      this.card$.getMovies()
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

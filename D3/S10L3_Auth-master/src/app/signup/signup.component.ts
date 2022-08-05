import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formUtenti!:FormGroup;

  constructor(private fb:FormBuilder , private auth$: AuthService) { }

  ngOnInit(): void {
    this.formUtenti = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  getFormEmail(email: string) {
    return this.formUtenti.get(email)
  }

  getFormPassword(password: string) {
    return this.formUtenti.get(password)
  }

  formSubmit(){
    console.log(this.getFormEmail('email')?.value);
    console.log(this.getFormPassword('password')?.value);

    let obj: UserSignup = {
      email: this.getFormEmail('email')?.value,
      password: this.getFormPassword('password')?.value,
    }
    console.log(obj);
    this.auth$.signup(obj);
  }
}

interface UserSignup{
  email: string;
  password: string;
}

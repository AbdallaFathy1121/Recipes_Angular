import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  error!: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode) {
      // ....
    } else {
      this.authService.signup(email, password).subscribe(
        dateResponse => {
          console.log(dateResponse);
        },
        errorRes => {
          console.log(errorRes);
          this.error = errorRes
        }
      );
    }

    form.reset();
  }

}

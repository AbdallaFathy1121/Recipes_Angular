import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  error!: string;
  closeSub!: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    if(this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(
      dateResponse => {
        console.log(dateResponse);
        this.router.navigate(['/recipes']);
      },
      errorRes => {
        this.showErrorAlert(errorRes);
        console.log(errorRes);
      }
    );

    form.reset();
  }

  private showErrorAlert(message: string) {
    this.viewContainerRef.clear();
    const component = this.viewContainerRef.createComponent(AlertComponent);
    component.instance.message = message;
    this.closeSub = component.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.viewContainerRef.clear();
    });


  }

}

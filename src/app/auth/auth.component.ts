import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLogin = true;
  formData = { username: '', password: '' };
  errorMsg = '';

  constructor(private authService: AuthService) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.errorMsg = '';
  }

  // submit() {

  //   if (!this.formData.username || !this.formData.password) {
  //     this.errorMsg = 'All fields required';
  //     return;
  //   }

  //   if (this.isLogin) {

  //     this.authService.signin(this.formData)
  //       .subscribe(res => {

  //         if (res.token) {
  //           this.authService.saveToken(res.token);
  //           window.location.href = '/dashboard';
  //         } else {
  //           this.errorMsg = res.error;
  //         }

  //       });

  //   } else {

  //     this.authService.signup(this.formData)
  //       .subscribe(res => {
  //         alert(res);
  //         this.toggleMode();
  //       });

  //   }
  // }

  submit() {
  console.log("Clicked", this.formData);

  if (!this.formData.username || !this.formData.password) {
    this.errorMsg = 'All fields required';
    return;
  }

  if (this.isLogin) {

    this.authService.signin(this.formData)
      .subscribe({
        next: (res) => {
          console.log("LOGIN RESPONSE", res);
          if (res.token) {
            this.authService.saveToken(res.token);
            window.location.href = '/dashboard';
          } else {
            this.errorMsg = res.error;
          }
        },
        error: (err) => {
          console.error("LOGIN ERROR", err);
        }
      });

  } else {

    this.authService.signup(this.formData)
      .subscribe({
        next: (res) => {
          console.log("SIGNUP RESPONSE", res);
          alert(res);
          this.toggleMode();
        },
        error: (err) => {
          console.error("SIGNUP ERROR", err);
        }
      });

  }
}
}
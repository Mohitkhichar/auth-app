import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Dashboard</h2>

    <button (click)="loadData()">Load Data</button>

    <p>{{data}}</p>

    <button (click)="logout()">Logout</button>
  `
})
export class DashboardComponent {

  data: any = '';

  constructor(private authService: AuthService) {}

  loadData() {
  this.authService.getDashboard().subscribe({
    next: (res: any) => {
      console.log("DATA:", res);
      this.data = res;
    },
    error: (err) => {
      console.error("LOAD DATA ERROR", err);
    }
  });
}

  logout() {
  this.authService.logoutApi().subscribe({
    next: () => {
      this.authService.logout();
      window.location.href = '/';
    },
    error: (err) => {
      console.error("Logout error", err);
      this.authService.logout(); // fallback
      window.location.href = '/';
    }
  });
}
}
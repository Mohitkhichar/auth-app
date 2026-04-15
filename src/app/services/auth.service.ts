import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://animated-goggles-w6qjvqq56vgcg94q-8080.app.github.dev/';

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/signup`, data, { responseType: 'text' });
  }

  signin(data: any) {
    return this.http.post<any>(`${this.baseUrl}/signin`, data);
  }

  getDashboard() {
    return this.http.get(`${this.baseUrl}/dashboard-data`);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // ✅ UPDATED LOGOUT
  logout() {
    localStorage.removeItem('token');
  }

  // ✅ NEW API CALL
  logoutApi() {
    return this.http.post(`${this.baseUrl}/logout`, {}, { responseType: 'text' });
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
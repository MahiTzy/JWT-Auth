import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  generateToken(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/token`, credentials);
  }

  loginUser(token: string): boolean {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

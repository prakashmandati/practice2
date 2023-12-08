import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8084/admin';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const adminUser = { email, password };
    return this.http.post<string>(`${this.baseUrl}/login`, adminUser, { responseType: 'text' as 'json' });
  }
}

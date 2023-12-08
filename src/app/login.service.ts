import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8084/api/v1/login';

  constructor(private http: HttpClient) { }

  login(emailId: string, password: string): Observable<string> {
    const adminUser = { emailId, password };
    return this.http.post<string>(`${this.baseUrl}`, adminUser, { responseType: 'text' as 'json' });
  }
}

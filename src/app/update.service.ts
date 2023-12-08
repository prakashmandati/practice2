import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private baseUrl = 'http://localhost:8084/api/v1/users';

  constructor(private http: HttpClient) { }

  updateUserProfile(user: User): Observable<any> {
    const url = `${this.baseUrl}/${user.id}`; // Assuming `id` is a property of the User object
    return this.http.put(url, user, { responseType: 'text' as 'json' });
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  changeUserPassword(id: number, newPassword: string): Observable<any> {
    const url = `${this.baseUrl}/${id}/changepassword`;
    const body = { password: newPassword }; // Assuming the API expects a request body with the new password
    return this.http.put(url, body, { responseType: 'text' as 'json' });
  }

  
}

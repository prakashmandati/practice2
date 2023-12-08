import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user'; // Make sure you have the correct path for the UserModel model
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableRegisterService {
 
  baseUrl = "http://localhost:8084/api/users"; // Remove quotes around baseUrl
 
  

  constructor(private http: HttpClient) { }

  registerUser(user: UserModel): Observable<object> {
    console.log(user);
    return this.http.post(this.baseUrl, user); // Remove backticks from baseUrl
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl);
  }

  updateStatus(userId: number, newStatus: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}/status?newStatus=${newStatus}`, null);
  }

  confirmUser(userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}/confirm`, null);
  }

  denyUser(userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}/deny`, null);
  }

  getConfirmedReservations(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}/confirmed-reservations`);
  }

}

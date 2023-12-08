import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:8084/api/cafe/messages';
  
  getmessages(): Observable<any> {
    return this.http.get(`${this.Url}`);
  }
}

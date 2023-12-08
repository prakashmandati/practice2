import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8084/api/cafe';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(`${this.baseUrl}/item`);
  }

  getItemById(id: number): Observable<ItemModel> {
    return this.http.get<ItemModel>(`${this.baseUrl}/item/${id}`);
  }

  addItem(item: ItemModel): Observable<ItemModel> {
    return this.http.post<ItemModel>(`${this.baseUrl}/item`, item);
  }

  updateItem(id: number, item: ItemModel): Observable<ItemModel> {
    return this.http.put<ItemModel>(`${this.baseUrl}/item/${id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/item/${id}`);
  }

  enableItem(id: number): Observable<ItemModel> {
    return this.http.post<ItemModel>(`${this.baseUrl}/enable/${id}`, {});
  }

  disableItem(id: number): Observable<ItemModel> {
    return this.http.post<ItemModel>(`${this.baseUrl}/disable/${id}`, {});
  }
}

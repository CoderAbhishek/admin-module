import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseURL = 'http://localhost:8080/notification/all'
  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>(`${this.baseURL}`);
  }
}

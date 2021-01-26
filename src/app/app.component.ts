import { Component, OnInit } from '@angular/core';
import { Notification } from './notification';
import { NotificationService } from './notification.service';
// import {  } from 'bootstrap/js/dist/'
// import {  } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-module';
  notifications: Notification[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
    });
  }
}

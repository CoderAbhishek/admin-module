import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/notification';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  notifications: Notification[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
    });
  }

}

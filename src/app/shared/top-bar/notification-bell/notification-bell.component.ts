import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/firebase/messaging.service';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss'],
})
export class NotificationBellComponent implements OnInit {
  toggle = false;
  notifications: {
    title: string;
    body: string;
    time: Date;
  }[] = [];
  constructor(private service: MessagingService) {}

  ngOnInit(): void {
    this.service.currentMessage$.subscribe((data) => {
      this.notifications.push({
        title: data.title,
        body: data.body,
        time: new Date(),
      });
    });
  }
  toggleNotification() {
    this.toggle = !this.toggle;
  }
}

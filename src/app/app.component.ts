import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Business', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Sports', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Entertainment', url: '/folder/Archived', icon: 'archive' },
    { title: 'Technology', url: '/folder/Trash', icon: 'trash' },
    { title: 'Health', url: '/folder/Spam', icon: 'warning' },
    { title: 'Science', url: '/folder/Spam', icon: 'warning' },
  ];
  
  constructor() {}
}

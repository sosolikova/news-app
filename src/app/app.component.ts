import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/folder/Inbox', icon: 'globe' },
    { title: 'Business', url: '/folder/Outbox', icon: 'cash' },
    { title: 'Sports', url: '/folder/Favorites', icon: 'bicycle' },
    { title: 'Entertainment', url: '/folder/Archived', icon: 'brush' },
    { title: 'Technology', url: '/folder/Trash', icon: 'laptop' },
    { title: 'Health', url: '/folder/Spam', icon: 'medkit' },
    { title: 'Science', url: '/folder/Spam', icon: 'flask' },
  ];
  
  constructor() {}
}

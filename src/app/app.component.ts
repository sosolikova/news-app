import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/general', icon: 'globe' },
    { title: 'Business', url: '/business', icon: 'cash' },
    { title: 'Sports', url: '/sports', icon: 'bicycle' },
    { title: 'Entertainment', url: '/entertainment', icon: 'brush' },
    { title: 'Technology', url: '/technology', icon: 'laptop' },
    { title: 'Health', url: '/health', icon: 'medkit' },
    { title: 'Science', url: '/science', icon: 'flask' },
  ];
  
  constructor() {}
}

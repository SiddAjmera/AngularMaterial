import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];
  showUsers: boolean = false;
  
  toggleSectionBelow() {
    this.showUsers = !this.showUsers;
  }

}
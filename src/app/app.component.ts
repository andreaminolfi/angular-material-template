import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { User } from './code/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: User[];
  selectedUser: User | undefined;
  constructor(private http: HttpClient) {
    http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => (this.users = res));
  }

  userClicked(id: number, drawer: MatDrawer) {
    this.selectedUser = this.users.find((u) => u.id === id);
    drawer.close();
  }
}

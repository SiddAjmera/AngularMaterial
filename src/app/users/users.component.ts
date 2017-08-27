import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
             .subscribe((response: Response) => {
               this.users = response.json();
             });
  }

}
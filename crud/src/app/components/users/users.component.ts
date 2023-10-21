import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: any [];
  getUsers(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]')
  }

  ngOnInit(): void{
    this.getUsers();
  }
}

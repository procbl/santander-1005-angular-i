import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() public user?: any;
  users!: any[];

  constructor(private dialog: MatDialog) {}
  getUsers(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');
  }

  ngOnInit(): void {
    this.getUsers();
  }

  openDialogCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      data: this.user, 
      disableClose: true,
      width: '80%', 
    });

    dialogRef.afterClosed().subscribe((devolutivaModal:any) => {
      if(devolutivaModal){
        console.log('devolutiva MOdal', devolutivaModal)
      }
    })
  }
}

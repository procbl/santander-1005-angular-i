import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() loginEmitter = new EventEmitter<any>();
  email?: string;
  password?: string;
  user?: any;

  login(): void {
    this.user = { email: this.email, password: this.password};
    this.loginEmitter.emit(this.user)
  }
}

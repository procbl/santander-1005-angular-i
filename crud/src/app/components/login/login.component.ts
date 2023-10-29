import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() loginEmitter = new EventEmitter<any>();
  user?: any;
  formA!: FormGroup;
  formB!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildFormA();
    this.buildFormB();
    this.testeValueChanges();
  }

  buildFormA() {
    this.formA = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(),
    })
  }
  
  buildFormB() {
    this.formB = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required]],
    })
  }

  login(): void { 
    console.log('formB', this.formB)
    console.log('formB', this.formB.value)
    this.user = { email: this.formB.value.email, password: this.formB.value.password};
    this.loginEmitter.emit(this.user)
  }

  testeValueChanges(){
    this.formB.controls['password'].valueChanges.subscribe({
      next(value) {
        if(value.length === 3) {
          value === '123' ? console.log('LOGOOOOOU') : console.log('SENHA INVALIDA')
        }
      },
    })
  }

  verForm(): void { 
    console.log(this.formB.controls['email'].errors)
    console.log('formB', this.formB)
    console.log('formB', this.formB.value)
  }
}

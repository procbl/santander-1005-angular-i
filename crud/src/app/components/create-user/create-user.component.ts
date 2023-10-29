import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  public user?: any;
  public userForm!: FormGroup;

  public phoneMask = '(00) 0 0000-0000';

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.userForm = this.fb.group({
      nome: [
        '',
        Validators.required,
      ],
      profissao: [''],
      dataNascimento: ['', Validators.required],
      email: [
        '',
        Validators.required,
      ],
      password: ['', Validators.required],
      telefone: [''],
      endereco: this.fb.group({
        cep: [''],
        rua: [''],
        numero: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
      }),
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    console.log(this.userForm.value)
    //this.user = this.userForm.value;
    //this.dialogRef.close(this.user);
  }
}

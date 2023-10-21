import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user?: any;
  users?: any[];

  createUser: any = {
    nome: 'Cleber',
    profissao: 'Dev',
    dataNascimento: '1997-11-16T00:00:00.000Z',
    email: 'cleber@gmail.com',
    password: '123',
    telefone: '619986097288',
    salario: 20000,
    endereco: {
      rua: 'QI 3 Bloco A',
      numero: 306,
      estado: 'DF',
      cidade: 'Brasília',
      bairro: 'Guará II',
      cep: '71020012',
    },
  };

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');

    const usuarioAutenticado = JSON.parse(localStorage.getItem('USER') || 'null');

    if (usuarioAutenticado) {
      this.user = usuarioAutenticado;
    }

    this.users?.push(this.createUser);
    localStorage.setItem('USERS', JSON.stringify(this.users));
  }

  fazerLogin(user: any) {
    const existeUsuario: any | undefined = this.users?.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (existeUsuario) {
      console.log('Usuário autenticado', existeUsuario);
      this.user = existeUsuario;
      localStorage.setItem('USER', JSON.stringify(this.user));
    } else {
      console.log('Falha no login');
    }
  }
}

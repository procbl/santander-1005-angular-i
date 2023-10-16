import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() tipoUsuario!: string;
  
  menu = ['home'];
  //mostrar um exemplo após ensinar sobre ciclo de vida
  verificaPermissaoUsuario() {
    if(this.tipoUsuario === 'ADMIN') {
      this.menu = ['home','about','address','contact'];
    } else {
      this.menu = ['home'];
    }
     console.log('tipo do usuário', this.tipoUsuario)
  }
}

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
 
  @Input() tipoUsuario!: any;
  @Output() public logoutUsuario = new EventEmitter<any>();;
  menu = ['home']; 

  ngOnChanges(changes: SimpleChanges) {
     this.verificaPermissaoUsuario()
  }
  
  verificaPermissaoUsuario() {
    if(this.tipoUsuario.permissao === 'ADMIN') {
      this.menu = ['home','about','address','contact'];
    } else {
      this.menu = ['home'];
    }
     console.log('tipo do usuário', this.tipoUsuario) 
  }

  logout() {
    //this.tipoUsuario.permissao = 'VISITANTE';
    this.logoutUsuario.emit()
    this.verificaPermissaoUsuario() 
  }
   
}

import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Output() public sendFormData = new EventEmitter<ContactForm>();
  @Output() public momentoEnvioForm = new EventEmitter<any>();

  teste!:any
  disabledButton = true;
  contactInfo: ContactForm = {
    email: '',
    message: '',
  };
  tipoUsuario:any = 'VISITANTE'

  disableEmail = false;

  constructor() {
    setTimeout(() => {
      this.disabledButton = false;
    }, 5000);
  }
  

  resetTipoUsuario(){
    console.log(this.tipoUsuario)
  }

  test(event:any) {
    //console.log('change event.key:', event.key)
   // console.log(event)
  }

  disabledButtonFunction() {
    return !this.disabledButton;
  }

  testEvent(event:any): void {
    //console.log('tecla apertada foi:', event.key)
    //console.log(event);
    if (this.contactInfo.email.endsWith('@gmail.com')) {
      //console.log('EMAIL COMPLETO');
      //console.log(event);
      this.disableEmail = true;
    } else {
      this.disableEmail = false;
    }
    /* this.contactInfo.email = this.contactInfo.email.toUpperCase();
     this.contactInfo.message = this.contactInfo.message.toUpperCase(); */
  }

  submitForm(): void {
    if(this.contactInfo.email === 'cleber@ada.com'){
      this.tipoUsuario = {permissao: 'ADMIN'};
    } else {
      this.tipoUsuario = {permissao: 'VISITANTE'};
    }
    console.log(
      'Evento Emitido pelo component filho(contact) para o component pai(app.component)  ',
      this.contactInfo
    );

    this.sendFormData.emit(this.contactInfo);
    this.momentoEnvioForm.emit();
    this.contactInfo = {
      email: '',
      message: '', 
    };
  }
}

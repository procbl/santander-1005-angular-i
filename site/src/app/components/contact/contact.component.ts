import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  disabledButton = true;
  contactInfo:any = {
    email: '',
    message:''
  }

  contactInfoTS:any = {
    email: '',
    message:''
  }
  disableEmail = false;

  constructor(){
    setTimeout(() => {
      this.disabledButton = false;
    }, 5000);
  }

  disabledButtonFunction() {
    return !this.disabledButton
  }

  
  testEvent(event:any):void {
    console.log(event)
    if(this.contactInfo.email.endsWith('@gmail.com')) {
      console.log('EMAIL COMPLETO')
      this.disableEmail = true
    } else {
      this.disableEmail = false
    }
     /* this.contactInfo.email = this.contactInfo.email.toUpperCase();
     this.contactInfo.message = this.contactInfo.message.toUpperCase(); */
  }

  submitForm(teste123:any): void {
    /* console.log('O Email: ' + this.contactInfo.email + ' e a Message: ' + this.contactInfo.message + ' foi envado com sucesso!!!') */
    console.log('Antes email:' + this.contactInfoTS.email + ' e Message: ' + this.contactInfoTS.message)
    
    this.contactInfoTS = {
      email: teste123.email,
      message: teste123.message
    }

    this.contactInfo = {
      email: '',
      message:''
    }
    console.log('Depois email:' + this.contactInfoTS.email + ' e Message: ' + this.contactInfoTS.message)
  }
}

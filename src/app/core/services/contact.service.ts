import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactData: Contact = {
    email: 'carlos.adrianzen27972@gmail.com',
    linkedin: 'https://www.linkedin.com/in/cdaa28/',
    github: 'https://github.com/cd28dev',
    whatsapp: 'https://wa.me/51942171548?text=Hola%20Carlos,%20vi%20tu%20portfolio...'
  };

  getContactInfo(): Contact {
    return this.contactData;
  }
}

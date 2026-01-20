import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Contact} from '../../core/models/contact.model';
import {ContactService} from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactInfo!: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactInfo = this.contactService.getContactInfo();
  }
}

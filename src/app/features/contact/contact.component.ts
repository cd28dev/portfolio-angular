import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInfo = {
    email: 'carlos.adrianzen27972@gmail.com',
    linkedin: 'https://www.linkedin.com/in/cdaa28/',
    github: 'https://github.com/cd28dev',
  };
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Formación', path: 'formacion' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' },
  ];
}

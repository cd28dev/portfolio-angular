import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  profile = {
    name: 'Carlos David Adrianzén',
    role: 'Desarrollador Backend Junior · Java / Spring Boot',
    description: `Desarrollador de software enfocado en la arquitectura limpia y microservicios con <strong>Java</strong>.
    Me caracterizo por mi adaptabilidad: mientras perfecciono mi especialidad en el ecosistema Spring,
    actualmente entrego soluciones tecnológicas a medida para clientes reales <strong>(Freelance)</strong>.`
  };

  // Array de Skills (Más fácil de mantener)
  skills: string[] = [
    'Java 17',
    'Spring Boot 3',
    'Docker',
    'Microservicios',
    'PostgreSQL'
  ];
}

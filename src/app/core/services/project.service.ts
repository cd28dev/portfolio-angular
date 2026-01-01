// core/services/data.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projects: Project[] = [
    {
      title: 'E-Commerce Microservices System',
      description: 'Arquitectura basada en microservicios con comunicación síncrona (Feign) y asíncrona (Kafka). Incluye clientes, catálogo, inventario, pedidos, pagos y notificaciones.',
      context:'Proyecto final para Escuela Java - NTT Data',
      techStack: ['Java 17', 'Spring Boot 3', 'Kafka', 'PostgreSQL', 'Docker', 'JWT', 'Spring Cloud'],
      role: 'Parte de equipo de desarrolladores (3)',
      video: 'video',
      url: 'https://github.com/joalf1994/ecommerce',
      inProgress: false
    },
    {
      title: 'Sistema de [Tu Otro Proyecto Java]',
      description: 'API RESTful avanzada implementando seguridad con OAuth2 y buenas prácticas de Clean Architecture. (Actualmente trabajando en la integración de pasarela de pagos).',
      context: 'Proyecto Personal (En Desarrollo)', // <--- Etiqueta clave
      techStack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'MySQL'],
      role: 'Backend Developer',
      url: 'https://github.com/carlosadrianzen/tu-repo-nuevo',
      inProgress: true
    },
    {
      title: 'Aplicación de Gestión [Nombre App]',
      description: 'Desarrollo Fullstack de una solución a medida para un cliente real. Gestión de usuarios, reportes y panel administrativo reactivo.',
      context: 'Experiencia Freelance / Profesional', // <--- Esto vende mucho
      techStack: ['Laravel', 'Vue.js', 'MySQL', 'PHP', 'Tailwind CSS'],
      role: 'Fullstack Developer',
      // Si el cliente no te deja poner el código, pon el link a la web desplegada
      // O déjalo vacío si es confidencial.
      url: '#',
      inProgress: true
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

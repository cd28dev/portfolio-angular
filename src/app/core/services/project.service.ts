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
      url: 'https://github.com/joalf1994/ecommerce'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

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
      description: 'Arquitectura distribuida con Spring Boot 3 que implementa patrones como Database per Service, API Gateway y Service Discovery (Eureka). Orquesta flujos asíncronos complejos (pedidos y pagos) mediante eventos con Apache Kafka y comunicación síncrona vía OpenFeign.',
      context: 'Proyecto para Escuela Java - NTT Data',
      techStack: [
        'Java 17',
        'Spring Boot 3',
        'Spring Cloud Gateway',
        'Apache Kafka',
        'Eureka & OpenFeign',
        'PostgreSQL',
        'Docker'
      ],
      role: 'Backend Developer (3)',
      video: 'https://www.youtube.com/watch?v=W6ye4pREpNU',
      url: 'https://github.com/cd28dev/ecommerce-v2',
      inProgress: false
    },
    {
      title: 'IncidenciasApp',
      description: 'Arquitectura de Microservicios para el registro y orquestación de incidencias operativas y delictivas. Desarrollado con Java 17 y Spring Boot 3, implementando patrones de Service Discovery (Eureka), API Gateway y comunicación síncrona (Feign). Incluye gestión de identidades segura vía JWT y contenedorización con Docker.',
      context: 'Proyecto Personal',
      techStack: ['Java 17', 'Spring Boot 3','Feign','Spring Security', 'JWT', 'PostgreSql','Docker'],
      role: 'Backend Developer',
      video: '',
      url: 'https://github.com/cd28dev/incidenciasAppSb',
      inProgress: true
    },
    {
      title: 'Sistema de gestión E-commerce',
      description: 'Plataforma ERP a medida para la gestión operativa de ventas de productos físicos. Orquesta el flujo completo: desde la captación del lead y venta asistida, pasando por el control financiero (pagos parciales/amortizaciones) y logística de envíos, hasta la post-venta con un Tracker público y gestión automatizada de devoluciones.',
      context: 'Freelance - Terr & Out ',
      techStack: [
        'Laravel 12 (API REST)',
        'Vue 3 (Composition API)',
        'Pinia',
        'MySQL',
        'Bootstrap 5',
        'Patrón Repositorio'
      ],
      role: 'Fullstack Developer',
      video: '',
      inProgress: true,
      links: [
        { type: 'github', label: 'Backend (Laravel)', url: 'https://github.com/cd28dev/back-terry-out/tree/develop' },
        { type: 'github', label: 'Frontend (Vue)', url: 'https://github.com/cd28dev/front-terry-out/tree/develop' }
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

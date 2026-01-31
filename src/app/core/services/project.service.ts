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
      video: 'https://youtu.be/W1Dobz1BMhU',
      inProgress: true,
      links: [
        //{ type: 'github', label: 'Backend', url: 'https://github.com/cd28dev/back-terry-out/tree/develop' },
        //{ type: 'github', label: 'Frontend', url: 'https://github.com/cd28dev/front-terry-out/tree/develop' }
      ]
    },
    {
      title: 'Biometric Security & Weather App',
      description: 'Aplicación nativa Android desarrollada con Kotlin y Jetpack Compose. Implementa Clean Architecture (MVVM). Cuenta con reconocimiento facial mediante ML Kit y consumo de API meteorológica. \n\n⚠️ NOTA: El simulador web (Appetize) tiene acceso limitado a la cámara web. Para probar el reconocimiento facial real, se recomienda descargar el APK.',      context: 'Proyecto académico',
      techStack: [
        'Kotlin',
        'Jetpack Compose',
        'Clean Architecture',
        'ML Kit (Face Detection)',
        'Coroutines & Flow',
        'Room Database',
        'Retrofit'
      ],
      role: 'Mobile Developer',
      video: '',
      links: [
        {
          type: 'demo',
          label: 'Simulador',
          url: 'https://appetize.io/app/b_6wp7pbjxinlitvlfqaaefggtru'
        },
        {
          type: 'external',
          label: 'Descargar APK (v1.0)',
          url: 'https://github.com/cd28dev/kotlin-apps/releases/download/v1.0.0/app-release.apk'
        },
        {
          type: 'github',
          label: 'Código Fuente',
          url: 'https://github.com/cd28dev/kotlin-apps'
        }
      ],
      inProgress: false
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

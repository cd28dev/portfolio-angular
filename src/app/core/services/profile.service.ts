import { Injectable } from '@angular/core';
import { Profile, SkillCategory } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: Profile = {
    name: 'Carlos David Adrianzén',
    role: 'Backend Developer · Java | Spring Boot',
    description: `Desarrollador de Software especializado en la construcción de <strong>APIs RESTful</strong> y arquitecturas de <strong>Microservicios</strong> escalables.
    Combino la robustez técnica de <strong>Java</strong> con la agilidad práctica adquirida liderando proyectos <strong>Freelance</strong>, donde transformo requerimientos complejos en soluciones desplegables.`
  };

  private skillCategories: SkillCategory[] = [
    {
      name: 'Core & Frameworks',
      items: ['Java ', 'Spring Boot', 'PHP', 'Laravel', 'TypeScript', 'Angular']
    },
    {
      name: 'Data & Analytics',
      items: [
        'PostgreSQL',
        'MySQL',
        'SQL Server',
        'Power BI'
      ]
    },
    {
      name: 'DevOps & Tools',
      items: ['Docker', 'Git | GitHub', 'Maven', 'Postman', 'Linux [WSL]']
    }
  ];

  getProfile(): Profile {
    return this.profile;
  }

  getSkills(): SkillCategory[] {
    return this.skillCategories;
  }
}

// core/services/education.service.ts
import { Injectable } from '@angular/core';
import { Card } from '../models/formacion.model';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
   private cards: Card[] = [
    {
        title: 'Ingeniería Informática',
        description: 'UNP | 2021 – Presente',
        link: { label: 'Constancia', url: 'https://drive.google.com/file/d/1TSlaTnxCa0w2aj0fI5sbGqCs2RmxitnS/view?usp=sharing' },
        group: 'Universitaria'
    },
    {
        title: 'Java',
        description: 'Udemy - 127 hr',
        link: { label: 'Constancia', url: 'https://www.udemy.com/certificate/UC-dfd49197-9332-4e21-86ad-e5c2e067075b/' },
        group: 'Backend'
    },
    {
        title: 'Spring Framework | Spring Boot',
        description: 'Udemy - 40.5 hr',
        link: { label: 'Constancia', url: 'https://www.udemy.com/certificate/UC-94cde51d-02cc-44a4-bd03-35b79b009b5a/' },
        group: 'Backend'
    },
     {
       title: 'Microservicios con SprinBoot & SpringCloud',
       description: 'Udemy - 28.5 hr',
       link: { label: 'Constancia', url: 'https://www.udemy.com/certificate/UC-65ad7d70-65bb-4e35-8f92-8047526609bd/' },
       group: 'Backend'
     },
    {
        title: 'Python',
        description: 'Cisco Networking - 96 hr',
        link: { label: 'Constancia', url: 'https://drive.google.com/file/d/1cVsz3uUQSXKHIRDwcXUUFT4qK2Si6tPG/view?usp=sharing' },
        group: 'Complementaria'
    },
    {
        title: 'Ofimática Empresarial',
        description: 'Idat Piura - 96 hr',
        link: { label: 'Constancia', url: 'https://drive.google.com/file/d/1qCoHoqzpCQKJp9UWFyCWldHVcG9ecetO/view?usp=sharing' },

        group: 'Complementaria'
    }

];


  getAll(): Card[] {
    return this.cards;
  }

  getByGroup(group: string): Card[] {
    return this.cards.filter(card => card.group === group);
  }
}

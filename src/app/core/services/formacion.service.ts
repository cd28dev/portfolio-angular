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
        link: { label: 'Constancia', url: '#' }, 
        group: 'Universitaria' 
    },
    { 
        title: 'Java', 
        description: 'Udemy - 127 hr',
        link: { label: 'Constancia', url: '#' }, 
        group: 'Backend' 
    },
    { 
        title: 'Spring Framework | Spring Boot', 
        description: 'Udemy - 40.5 hr', 
        link: { label: 'Constancia', url: '#' }, 
        group: 'Backend' 
    },
    { 
        title: 'Python', 
        description: 'Cisco Networking - 96 hr',
        link: { label: 'Constancia', url: '#' }, 
        group: 'Complementaria' 
    },
    { 
        title: 'Ofimática Empresarial', 
        description: 'Idat Piura - 96 hr',
        link: { label: 'Constancia', url: '#' }, 
 
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionService } from '../../core/services/formacion.service';
import { Card } from '../../core/models/formacion.model';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {
  cards: Card[] = [];
  groups: string[] = [];

  constructor(private formacionService: FormacionService) {
    this.cards = this.formacionService.getAll();

    // Genera los grupos únicos automáticamente
    this.groups = Array.from(new Set(this.cards.map(card => card.group)));
  }

  getCardsByGroup(group: string): Card[] {
    return this.cards.filter(card => card.group === group);
  }
}

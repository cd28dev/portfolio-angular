import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionService } from '../../core/services/formacion.service';
import { Card } from '../../core/models/formacion.model';

interface GroupedCards {
  group: string;
  cards: Card[];
}

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {
  groupedFormacion: GroupedCards[] = [];

  constructor(private formacionService: FormacionService) {
    const allCards = this.formacionService.getAll();
    const groups = Array.from(new Set(allCards.map(c => c.group)));

    // Pre-calculamos la estructura final
    this.groupedFormacion = groups.map(group => ({
      group,
      cards: allCards.filter(c => c.group === group)
    }));
  }
}

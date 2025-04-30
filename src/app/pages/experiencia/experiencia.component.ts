import { Component, inject } from '@angular/core';
import type { Experiencia } from '../../interfaces/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  experiencia: Experiencia[] = []
  homeService = inject(ExperienciaService)

  async ngOnInit() {
    this.experiencia = await this.homeService.getAll();
  }
}

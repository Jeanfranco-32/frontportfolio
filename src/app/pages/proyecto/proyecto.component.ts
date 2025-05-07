import { Component, inject } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import type { Proyecto } from '../../interfaces/proyecto';

@Component({
  selector: 'app-proyecto',
  imports: [],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

  proyectoService = inject(ProyectoService)
  proyectos: Proyecto[] = []

  async ngOnInit() {
    this.proyectos = await this.proyectoService.getAll();
  }

}

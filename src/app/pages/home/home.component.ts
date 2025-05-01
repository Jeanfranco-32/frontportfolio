import { Component, inject } from '@angular/core';
import type { Usuario } from '../../interfaces/usuario';
import { HomeService } from '../../services/home.service';
import { RouterLink } from '@angular/router';
import { ExperienciaService } from '../../services/experiencia.service';
import type { Experiencia } from '../../interfaces/experiencia';
import { FormacionService } from '../../services/formacion.service';
import type { Formacion } from '../../interfaces/formacion';
import { ProyectoService } from '../../services/proyecto.service';
import type { Proyecto } from '../../interfaces/proyecto';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeService = inject(HomeService)
  experienciaService = inject(ExperienciaService)
  formacionService = inject(FormacionService)
  proyectoService = inject(ProyectoService)
  usuarios: Usuario[] = []
  formacion: Formacion[] = []
  experiencia: Experiencia[] = []
  proyectos: Proyecto[] = []

  async ngOnInit() {
    this.usuarios = await this.homeService.getAll();
    this.experiencia = await this.experienciaService.getAll();
    this.formacion = await this.formacionService.getAll();
    this.proyectos = await this.proyectoService.getAll();
  }
}

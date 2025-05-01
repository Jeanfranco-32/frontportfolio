import { Component, inject } from '@angular/core';
import type { Usuario } from '../../interfaces/usuario';
import { HomeService } from '../../services/home.service';
import { RouterLink } from '@angular/router';
import { ExperienciaService } from '../../services/experiencia.service';
import type { Experiencia } from '../../interfaces/experiencia';
import { FormacionService } from '../../services/formacion.service';
import type { Formacion } from '../../interfaces/formacion';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: Usuario[] = []
  homeService = inject(HomeService)
  experienciaService = inject(ExperienciaService)
  formacionService = inject(FormacionService)
  formacion: Formacion[] = []
  experiencia: Experiencia[] = []

  async ngOnInit() {
    this.usuarios = await this.homeService.getAll();
    this.experiencia = await this.experienciaService.getAll();
    this.formacion = await this.formacionService.getAll();
  }
}

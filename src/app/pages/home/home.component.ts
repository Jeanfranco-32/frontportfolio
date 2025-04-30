import { Component, inject } from '@angular/core';
import type { Usuario } from '../../interfaces/usuario';
import { HomeService } from '../../services/home.service';
import { RouterLink } from '@angular/router';
import { ExperienciaService } from '../../services/experiencia.service';
import type { Experiencia } from '../../interfaces/experiencia';

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
  experiencia: Experiencia[] = []

  async ngOnInit() {
    this.usuarios = await this.homeService.getAll();
    this.experiencia = await this.experienciaService.getAll();
  }
}

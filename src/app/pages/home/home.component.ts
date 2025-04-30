import { Component, inject } from '@angular/core';
import type { Usuario } from '../../interfaces/usuario';
import { HomeService } from '../../services/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: Usuario[] = []
  homeService = inject(HomeService)

  async ngOnInit() {
    this.usuarios = await this.homeService.getAll();
  }
}

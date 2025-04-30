import { Component, inject } from '@angular/core';
import type { Usuario } from '../../interfaces/usuario';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuario: Usuario[] = []
  homeService = inject(HomeService)

  async ngOnInit() {
    this.usuario = await this.homeService.getAll();

  }

}

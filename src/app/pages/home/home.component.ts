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
    const result = await this.homeService.getAll();
    this.usuario = Array.isArray(result) ? result : [result];
  }

}

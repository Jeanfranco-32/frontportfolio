import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Proyecto } from '../interfaces/proyecto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Proyecto[]>(`${this.baseUrl}/proyecto/proyecto`)
    )
  }

}

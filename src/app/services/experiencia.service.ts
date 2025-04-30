import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Experiencia } from '../interfaces/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private baseUrl = 'http://localhost:3000/api/experiencia/experiencia'
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Experiencia[]>(`${this.baseUrl}`)
    )
  }
}

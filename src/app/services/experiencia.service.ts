import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Experiencia } from '../interfaces/experiencia';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Experiencia[]>(`${this.baseUrl}/experiencia/experiencia`)
    )
  }
}

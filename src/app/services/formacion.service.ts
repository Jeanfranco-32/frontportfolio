import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Formacion } from '../interfaces/formacion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Formacion[]>(`${this.baseUrl}/formacion/formacion`)
    )
  }
}

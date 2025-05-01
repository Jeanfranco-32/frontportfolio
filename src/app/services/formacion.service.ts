import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Formacion } from '../interfaces/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private baseUrl = 'http://localhost:3000/api/formacion/formacion'
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Formacion[]>(`${this.baseUrl}`)
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Usuario[]>(`${this.baseUrl}/usuario/usuario`)
    )
  }
}

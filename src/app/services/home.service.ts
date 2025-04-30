import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import type { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private httpclient = inject(HttpClient)
  private baseUrl = 'http://localhost:3000/api/usuario/usuario'

  getAll() {
    return lastValueFrom(
      this.httpclient.get<Usuario[]>(`${this.baseUrl}`)
    )
  }
}

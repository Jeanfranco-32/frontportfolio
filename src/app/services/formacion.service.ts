import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private baseUrl = 'http://localhost:3000/api/formacion/formacion'
  private httpClient = inject(HttpClient)
}

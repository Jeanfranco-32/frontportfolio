import { Component, inject } from '@angular/core';
import type { Formacion } from '../../interfaces/formacion';
import { FormacionService } from '../../services/formacion.service';

@Component({
  selector: 'app-formacion',
  imports: [],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {

  formacionService = inject(FormacionService)
  formacion: Formacion[] = []

  async ngOnInit() {
    this.formacion = await this.formacionService.getAll();
  }

}

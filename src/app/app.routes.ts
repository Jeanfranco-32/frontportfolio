import type { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'experiencia', component: ExperienciaComponent },
            { path: 'formacion', component: FormacionComponent },
            { path: 'proyecto', component: ProyectoComponent }
        ]
    },

    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'proyecto', component: ProyectoComponent },
];

import type { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { EducacionComponent } from './pages/educacion/educacion.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: SobremiComponent },
    { path: 'educacion', component: EducacionComponent },
    { path: '**', redirectTo: 'home' }
];

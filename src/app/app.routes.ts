import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/views/welcome/welcome.component';
import { CvComponent } from './components/views/cv/cv.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Página de inicio
  { path: 'cv', component: CvComponent }, // Página del CV
  { path: '**', redirectTo: '' } // Redirigir a inicio si la ruta no existe
];

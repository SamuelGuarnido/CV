import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/views/welcome/welcome.component';
import { CvComponent } from './components/views/cv/cv.component';
import { MobileCvComponent } from './components/views/mobile-cv/mobile-cv.component';
import { MobileAccessGuard } from './guards/mobile/mobile-access.guard';

export const routes: Routes = [
  { path: '',
    component: WelcomeComponent
  }, // Página de inicio
  { path: 'cv',
    component: CvComponent,
    canActivate: [MobileAccessGuard]
  }, // Página del CV
  { path: 'cv-mobile',
    component: MobileCvComponent,
    canActivate: [MobileAccessGuard]
  },
  { path: '**',
    redirectTo: ''
  } // Redirigir a inicio si la ruta no existe
];

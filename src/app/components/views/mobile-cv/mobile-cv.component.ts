import { Component, signal } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-mobile-cv',
  standalone: true,
  imports: [
    MatDividerModule,
    MatExpansionModule,
    MatCardModule
  ],
  templateUrl: './mobile-cv.component.html',
  styleUrl: './mobile-cv.component.scss'
})
export class MobileCvComponent {
  readonly panelOpenState = signal(false);

  copyEmailToClipboard() {
    const email = 'samuelguarnido4@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const feedback = document.getElementById('copy-feedback');
      if (feedback) {
        feedback.style.display = 'inline';
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 2000); // Oculta el mensaje de "Copiado" después de 2 segundos
      }
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }

  copyPhoneToClipboard() {
    const phoneNumber = '+34 633 80 95 44';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      const feedback = document.getElementById('copy-phone-feedback');
      if (feedback) {
        feedback.style.display = 'inline';
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 2000); // Oculta el mensaje de "Copiado" después de 2 segundos
      }
    }).catch(err => {
      console.error('Error al copiar el número de teléfono: ', err);
    });
  }
}

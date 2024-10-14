import { Component } from '@angular/core';


import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }), // Estado inicial
        animate('700ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })) // Estado final
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' })) // Desaparición
      ])
    ]),
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), // Estilo inicial
        animate('600ms ease-in', style({ opacity: 1 })) // Animación de entrada
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })) // Animación de salida
      ])
    ])
  ]
})
export class CvComponent {
  currentSection: string = 'aboutMe'; // Valor inicial de la sección

  // Cambia la sección según el botón que se presiona
  changeSection(section: string) {
    this.currentSection = section;
  }

}

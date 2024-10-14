import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private router: Router) {}

  goCV(){
    this.router.navigate(["cv"]);
  }
}

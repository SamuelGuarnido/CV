import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MobileAccessGuard implements CanActivate {
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
      map(result => {
        if (result.matches) {
          return true; // Permitir el acceso si es un dispositivo móvil
        } else {
          this.router.navigate(['cv']); // Redirigir si no es móvil
          return false;
        }
      })
    );
  }
}

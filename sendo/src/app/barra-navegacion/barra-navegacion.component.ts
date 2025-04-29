import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; // ruta correcta según tu estructura
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // <-- IMPORTA CommonModule

@Component({
  selector: 'app-barra-navegacion',
  imports: [RouterModule, CommonModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  user$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }
  logout() {
    this.authService.logout().then(() => {
      console.log('Sesión cerrada correctamente');
      window.location.reload();
    }).catch((error) => {
      console.error('Error al cerrar sesión', error);
    });
  }

}

import { Component } from '@angular/core';
import { ComponenteTransferirComponent } from '../componente-transferir/componente-transferir.component';
import { HistorialComponent } from '../historial/historial.component';
import { ActividadRecienteComponent } from '../actividad-reciente/actividad-reciente.component';
import { TarjetasVinculadasComponent } from '../tarjetas-vinculadas/tarjetas-vinculadas.component';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ComponenteTransferirComponent, ActividadRecienteComponent, TarjetasVinculadasComponent],
  template: `<h1>Página de inicio</h1>`,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    user$: Observable<User | null>;
  
    constructor(private authService: AuthService) {
      this.user$ = this.authService.user$;
    }

}

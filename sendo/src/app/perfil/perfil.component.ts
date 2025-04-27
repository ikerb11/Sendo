import { Component } from '@angular/core';
import { TarjetasVinculadasComponent } from '../tarjetas-vinculadas/tarjetas-vinculadas.component';

@Component({
  selector: 'app-perfil',
  imports: [TarjetasVinculadasComponent],
  template: `<h1>Perfil</h1>`,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}

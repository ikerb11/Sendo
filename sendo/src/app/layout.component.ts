// src/app/layout.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, BarraNavegacionComponent,AppComponent, PerfilComponent, FooterComponent],
  template: `
    <app-barra-navegacion></app-barra-navegacion>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class LayoutComponent { }

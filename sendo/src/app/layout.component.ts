// src/app/layout.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, BarraNavegacionComponent,AppComponent],
  template: `
    <app-barra-navegacion></app-barra-navegacion>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent { }

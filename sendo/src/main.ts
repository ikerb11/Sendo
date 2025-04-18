// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

// Asegúrate de que las rutas estén bien importadas
import { LayoutComponent } from './app/layout.component'; // Verifica la ruta del Layout
import { InicioComponent } from './app/inicio/inicio.component';  // Ruta correcta para el componente inicio

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      // Redirige '/' a '/inicio'
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: '',
        component: LayoutComponent,  // Usamos LayoutComponent como base para la navegación
        children: [
          { path: 'inicio', component: InicioComponent },  // Aquí la ruta 'inicio' carga InicioComponent
        ]
      }
    ])
  ]
});


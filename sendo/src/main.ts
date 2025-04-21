import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';

import { LayoutComponent } from './app/layout.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { HistorialComponent } from './app/historial/historial.component';
import { PerfilComponent } from './app/perfil/perfil.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        {
          path: '',
          component: LayoutComponent,
          children: [
            { path: 'inicio', component: InicioComponent },
            { path: 'historial', component: HistorialComponent },
            { path: 'perfil', component: PerfilComponent }
          ]
        }
      ],
      withHashLocation() // 👉 ESTA LÍNEA ES LA CLAVE
    )
  ]
});

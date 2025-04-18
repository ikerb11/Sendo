import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';

import { LayoutComponent } from './app/layout.component';
import { InicioComponent } from './app/inicio/inicio.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        {
          path: '',
          component: LayoutComponent,
          children: [
            { path: 'inicio', component: InicioComponent }
          ]
        }
      ],
      withHashLocation() // 👉 ESTA LÍNEA ES LA CLAVE
    )
  ]
});

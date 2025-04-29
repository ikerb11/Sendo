import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from './app/environments/environment';

import { LayoutComponent } from './app/layout.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { HistorialComponent } from './app/historial/historial.component';
import { PerfilComponent } from './app/perfil/perfil.component';
import { NosotrosComponent } from './app/nosotros/nosotros.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { LoginComponent } from './app/login/login.component';

import { authGuard } from './app/guards/auth.guard';

bootstrapApplication(AppComponent, {
  providers: [
    // ✅ Primero registrar Firebase App
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),

    // ✅ Luego Auth para que esté disponible en guards
    provideAuth(() => getAuth()),

    // ✅ Definición de rutas con guard activado en las protegidas
    provideRouter(
      [
        { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        {
          path: '',
          component: LayoutComponent,
          children: [
            { path: 'inicio', component: InicioComponent, canActivate: [authGuard] },
            { path: 'historial', component: HistorialComponent, canActivate: [authGuard] },
            { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'contacto', component: ContactoComponent }
          ]
        },
        { path: 'login', component: LoginComponent }
      ],
      withHashLocation()
    )
  ]
});

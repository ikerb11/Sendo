import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta si hace falta
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginWithGoogle()
      .then((result) => {
        console.log('Login correcto ', result.user);
        this.router.navigate(['/inicio']);
        // Redirigir o hacer lo que necesites
      })
      .catch((error) => {
        console.error('Error al iniciar sesión ', error);
      });

  }
}

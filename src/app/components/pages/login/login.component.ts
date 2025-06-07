import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login as loginGuard } from '../../../guards/auth.guard';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    loginGuard();
    this.router.navigate(['/crud/listar']);
  }
  
}

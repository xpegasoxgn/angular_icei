import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { logout as loginGuard } from '../../../guards/auth.guard';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  logout(){
    loginGuard();
    this.router.navigate(['/login']);
  }
}

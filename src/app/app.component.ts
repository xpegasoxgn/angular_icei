import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      const urlParams=new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const username = urlParams.get('username');
      const roles = urlParams.get('roles');
      console.log('token', token);
      if(token){
        localStorage.setItem('token',token);

      }
      if (username){
        localStorage.setItem('username',username);

      }
      if(roles){
        localStorage.setItem('roles',roles);
      }
  }
  title = 'clase-angular19';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  host: {'ngSkipHydratation':'true'}
})
export class SideBarComponent {

}

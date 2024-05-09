import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: `<h2>Hola desde {{ city.toUpperCase() }}</h2>
  //   <app-user></app-user>`,  las llaves evalúan directamente el resultado de su interior
  // styles: `
  // h2 {
  //   font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  // color: goldenrod;
  // }`,
})
export class AppComponent {
  city = 'Barcelona';
}

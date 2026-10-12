import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  // Aquí agregamos el NavbarComponent para poder usarlo en el HTML
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
})
export class App {
  title = 'techpulse-angular';
}

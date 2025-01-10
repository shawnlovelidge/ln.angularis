import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.html',
  styleUrl: 'app.scss',
})
export class AppComponent {
  title = 'ln.angular';
}

import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Environment } from '@angularis/core';
import { AgEnvironmentService } from '@angularis/service';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AgEnvironmentService],
})
export class AppComponent {
  //
  // Injected Services
  //
  title = 'Web Component';
  //
  // Constructor
  //
  constructor(private environmentService: AgEnvironmentService) {}
}

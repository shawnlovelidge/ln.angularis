import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Environment } from '@angularis/core';
import { AgEnvironmentService } from '@angularis/service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  //
  // Injected Services
  //
  title = 'web';

  //
  // Constructor
  //
  constructor(private environmentService: AgEnvironmentService) {
    debugger;
    console.log('App Component');
  }
}

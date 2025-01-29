import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgEnvironmentService } from '@angularis/service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//
// Import the AgComponentModule
//
import { AgComponentModule } from '@angularis/component';
//
// Icons
//
//import { faCoffee, faAppleAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, AgComponentModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AgEnvironmentService],
})
export class AppComponent {


  title = 'Web Component';
  //
  // Constructor
  //
  constructor(private environmentService: AgEnvironmentService) {}
}

import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgEnvironmentService, AgJsonService } from '@angularis/service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//
// Import the AgComponentModule
//
import { AgComponentModule } from '@angularis/component';
import { LnTheme } from './component/ln-theme/ln-theme';
import { LnHeader } from './component/ln-header/ln-header';
//
// Json
//
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FontAwesomeModule,
    LnHeader,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AgEnvironmentService],
})
export class AppComponent implements OnInit {
  public title = 'LernenderCorp Angular Component Library';
  public menu = signal<any[]>([]);
  //
  // Constructor
  //
  constructor(
    private environmentService: AgEnvironmentService,
    private jsonService: AgJsonService
  ) {
  }

  //
  // ngOnInit
  //
  public ngOnInit() {
    //
    // Load menu
    //
    this.jsonService.get('json/nav-menu.json').subscribe(json => {
      json.sort((a: any, b: any) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );

      for (let i = 0; i < json.length; i++) {
        json[i].menu.sort((a: any, b: any) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      }

      this.menu.set(json);
    });
  }
}

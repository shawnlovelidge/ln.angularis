import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
// '@ngularis/core'
//
import { Library } from '@angularis/core';
//
// @models
//
import { RouteMenu } from '../../../model/route.menu';

//
// @components
//
import { AgBanner } from '@angularis/component';

@Component({
  imports: [CommonModule, AgBanner],
  selector: 'ln-canvas',
  templateUrl: 'ln-canvas.html',
  styleUrls: ['ln-canvas.scss'],
})
export class LnCanvas implements OnInit {
  @Input() public route: RouteMenu = new RouteMenu();
  //
  // Constructor
  //
  constructor(private activatedRoute: ActivatedRoute) {}
  //
  // ngOnInit
  //
  public ngOnInit() {
    //
    // Get Route Record
    //
    this.route = new RouteMenu(
      JSON.parse(this.activatedRoute.snapshot.queryParams['route'])
    );
  }
}

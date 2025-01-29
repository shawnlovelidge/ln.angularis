import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
//
// @angularis/component
//
import { AgCard } from '@angularis/component';
//
// Import Card Model
//
import { Card, Style, Image } from '@angularis/core';
//
// @Components
//
import { LnCanvas } from '../../component/ln-canvas/ln-canvas';

@Component({
  imports: [CommonModule, LnCanvas, AgCard],
  selector: 'AgButton',
  templateUrl: './ln-card.html',
})
export class LnCard {
  public stacked = signal(
    new Card({
      label: 'Stacked Card',
      name: 'stacked',
      style: new Style({
        height: '300px',
        width: '214px',
      }),
      image: new Image({
        style: {
          height: '300px',
          width: '200px',
        },
        href: 'https://placehold.co/200x300',
        label: 'Avatar',
      }),
      disabled: false,
      hidden: false,
    })
  );
  public stackedStyle = signal({
    height: 'auto',
    width: '400px',
  });
  public stackedContentStyle = signal({
    height: 'auto',
    width: 'auto',
  });
  public side = signal(
    new Card({
      label: 'Stacked Card',
      name: 'side-by-side',
      style: new Style({
        height: '400px',
        width: 'auto',
      }),
      image: new Image({
        style: {
          height: '300px',
          width: 'auto',
        },
        href: 'https://placehold.co/300x400',
        label: 'Avatar',
      }),
      disabled: false,
      hidden: false,
    })
  );
  public hidden = signal(false);
  public disabled = signal(false);
  public active = signal(false);

  public sideStyle = signal({
    height: 'auto',
    width: 'auto',
  });
  public sideContentStyle = signal({
    height: 'auto',
    width: 'auto',
  });
  //
  // Constructor
  //
  constructor() {}
  //
  // ngOnInit
  //
  public ngOnInit() {}
  //
  // handleOnClick
  //
  public handleOnClick($event: MouseEvent) {
    const { target } = $event;
    const { innerText } = target as HTMLElement;
    //
    // Console Debug Statement
    //
    console.debug(
      `%c ${innerText} button clicked`,
      `color:rgb(210, 243, 26); font-size: 12px; font-weight: bold`
    );
  }
}

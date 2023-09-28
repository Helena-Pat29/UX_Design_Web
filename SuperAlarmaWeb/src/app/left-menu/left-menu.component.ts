import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in <=> out', animate('300ms'))
    ])
  ]
})
export class LeftMenuComponent implements OnInit {

  activeButton: string = 'signin'; // default active button
  darkBlue: string = '#0B68CB';
  accentColor: string = '#96C7F2';

  setActiveButton(button: string) {
      this.activeButton = button;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

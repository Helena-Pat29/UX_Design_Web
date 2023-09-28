import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('slideInSlideOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showLeftMenu = false;

  toggleLeftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
  }

}

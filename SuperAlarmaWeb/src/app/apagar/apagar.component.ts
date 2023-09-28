import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-apagar',
  templateUrl: './apagar.component.html',
  styleUrls: ['./apagar.component.css'],
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
export class ApagarComponent implements OnInit {

  showLeftMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLeftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
  }
}

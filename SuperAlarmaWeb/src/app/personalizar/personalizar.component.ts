import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.component.html',
  styleUrls: ['./personalizar.component.css'],
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
export class PersonalizarComponent implements OnInit {

  showLeftMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLeftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
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
export class CrearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  repeatToggle: boolean = false;
  soundToggle: boolean = false;
  snoozeToggle: boolean = false;

  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: { value: number, name: string }[] = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    // ... rest of the months
    { value: 12, name: 'Diciembre' }
  ];
  years: number[] = Array.from({length: 21}, (_, i) => new Date().getFullYear() - i);

  selectedDay: number = new Date().getDate();
  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();

  selectedHour: number = 12;
  selectedMinute: number = 0;
  amPm: string = 'AM';

  hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);  // creates an array [1, 2, ... 12]
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i); // creates an array [0, 1, 2, ... 59]

  onHourChange(event: any) {
    this.selectedHour = +event.target.value;
  }

  onMinuteChange(event: any) {
    this.selectedMinute = +event.target.value;
  }

  onAmPmChange(event: any) {
    this.amPm = event.target.value;
  }

  cloudAlarms = [
    { id: 1, name: 'Alarm 1', date: '27 Sep 2023' },
    { id: 2, name: 'Alarm 2', date: '28 Sep 2023' },
    // ... more alarms ...
  ];

  clearAlarm(id: number) {
    // Implement your logic to clear the alarm here
  }

  showLeftMenu = false;

  toggleLeftMenu() {
    this.showLeftMenu = !this.showLeftMenu;
  }

}

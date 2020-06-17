import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  calendarList = [{
    scheduledAt: "2020-06-02T08:00:00.000Z",
    performed: false,
    procedure: {
      "id": 4,
      "tooth_number": 31,
      "name": "RESTAURACAO",
      "category": "GERAL",
      "price": 50.9,
      "createdAt": "2020-06-02T21:30:33.150Z",
      "updatedAt": "2020-06-02T21:30:33.150Z",
      "budget_id": 1
    }
  },
  {
    scheduledAt: "2020-06-02T10:00:00.000Z",
    performed: true,
    procedure: {
      "id": 5,
      "tooth_number": 31,
      "name": "RESTAURACAO",
      "category": "GERAL",
      "price": 65.5,
      "createdAt": "2020-06-02T21:30:33.150Z",
      "updatedAt": "2020-06-02T21:30:33.150Z",
      "budget_id": 1
    }
  }];
  constructor() { }

  ngOnInit() {
  }

}

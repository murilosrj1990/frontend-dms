import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {
    name: "Zacarias",
    email: "zacatrapalhao@gmail.com",
    phone: "9 9999-9999"
  }
  constructor() { }

  ngOnInit() {
  }

}

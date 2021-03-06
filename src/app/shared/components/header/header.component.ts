/**
 * This file should contains all the logic and parameters related to header.
 * Any changes in this file will lead to changes in all the places
 * where ever its refered
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private toggle: boolean;
  @Input() title: string;
  @Input() logoSrc: string;
  userName: string;

  constructor() {
    this.toggle = false;
    this.userName = 'Ajay';
  }

  ngOnInit() {
  }

  hamburgerToggle() {
    if (this.toggle) {
      this.toggle = false;
    } else {
      this.toggle = true;
    }
  }
}

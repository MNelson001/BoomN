import { Component, HostListener, OnInit } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.sass']
})
export class NavigationDrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let nav = document.getElementById('nav')

    if (number > 120) {
      nav.style.background = "#000";
      nav.classList.add('animated', 'fadeIn', 'textChange');

    } else if (number < 120) {
      nav.style.background = 'transparent';
      nav.classList.remove('fadeIn', 'textChange');
    }
  }

}

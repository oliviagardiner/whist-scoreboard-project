import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simplewhistmenu',
  templateUrl: './simplewhistmenu.component.html',
  styleUrls: ['../../../menu/menu.component.css']
})
export class SimplewhistmenuComponent implements OnInit {

  isActive:boolean = false;
  isOn:boolean = false;
  isAnim:boolean = false;
  toggleOn:boolean = false;

  toggleAnim() {
    if (this.toggleOn) {
      this.toggleOn = false;
    } else {
      this.toggleOn = true;
    }
  }

  animateImg() {
    this.isOn = true;
    setTimeout(() => {
      this.isOn = false;
    }, 1000);
  }

  navigate(page) {
    this.isActive = true;
    setTimeout(() => {
      this.router.navigateByUrl('/' + page);
    }, 1000);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.isOn = true;
    setTimeout(() => {
      this.isOn = false;
    }, 1000);
  }

}

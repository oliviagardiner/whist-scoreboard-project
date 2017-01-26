import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isActive:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.isActive = true;
    }, 3000);

    setTimeout(() => {
      this.router.navigateByUrl('menu');
    }, 4000);
  }

}

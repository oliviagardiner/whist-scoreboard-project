import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-simplemenu',
  templateUrl: './simplemenu.component.html',
  styleUrls: ['../../../menu/menu.component.css']
})
export class SimplemenuComponent implements OnInit {

  isActive:boolean = false;
  isOn:boolean = false;
  isAnim:boolean = false;
  toggleOn:boolean = false;

  maxplayers = 4;
  playercount = 2;

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

  pushValue(name, id, button) {
    if (name === '') {
      console.log('Empty string')
    } else if (this.temp.length === this.maxplayers) {
        for (let i=0; i < this.temp.length; i++) {
          if (this.temp[i].id === id) {
            this.temp[i].name = name;
            console.log('Player ' + id + ' successfully updated name to ' + name);
          }
        }
    } else if (this.temp.length < this.maxplayers) {
      this.temp.push({ "id": id, "name": name, "currentscore": "0"});
      if (this.temp.length === this.playercount) {
        button.disabled = false;
      }
      console.log('Player ' + id + ' name successfully set to ' + name);
    }
  }

  addPlayer() {
    if (this.playercount < this.maxplayers) {
      this.playercount++;
    } else {
      console.log('Unable to add more players in this game mode')
    }
  }

  removePlayer() {
    if (this.playercount > 2) {
      this.playercount--;
    } else {
      console.log('Player count can\'t be lower than 2')
    }
  }

  playerInit() {
    console.log('player init temp', this.temp);
    this.data.pushToPlayers(this.temp)
      .toPromise()
      .then(() => this.clearTemp())
      .then(() => console.log('cleared temp', this.temp))
      .catch(this.handleError);
    this.navigate('simple/board');
  }

  temp = [];

  clearTemp() {
    this.temp = [];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.isOn = true;
    setTimeout(() => {
      this.isOn = false;
    }, 1000);
  }

}

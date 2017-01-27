import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-simpleboard',
  templateUrl: './simpleboard.component.html',
  styleUrls: [
    '../../../menu/menu.component.css',
    './simpleboard.component.css'
  ]
})
export class SimpleboardComponent implements OnInit {

  isOn:boolean = false;
  isActive:boolean = false;
  isShown:boolean = false;

  animateImg() {
    this.isOn = true;
    setTimeout(() => {
      this.isOn = false;
    }, 1000);
  }

  hideNote() {
    this.isShown = true;
  }

  bidgame = true;
  playercount;

  roundcount = 0;
  cardcount = 13;

  pushValue(value, id, button) {
    if (value === '') {
      console.log('Empty string')
    } else if (this.temp.length === this.playercount) {
      for (let i=0; i < this.temp.length; i++) {
        if (this.temp[i].id === id) {
          this.temp[i].bid = value;
          console.log('Player ' + id + ' successfully updated bid to ' + value);
        }
      }
    } else if (this.temp.length < this.playercount) {
      this.temp.push({ "id": id, "bid": value, "take": " ", "score": " "});
      if (this.temp.length === this.playercount) {
        button.disabled = false;
      }
      console.log('Player ' + id + ' successfully placed bid of ' + value);
    }
  }

  roundInit() {
    console.log('round init temp', this.temp);
    this.data.pushToRounds(this.temp)
      .toPromise()
      .then(() => this.fetchRounds())
      .catch(this.handleError)
      .then(() => this.roundcount++)
  }

  temp = [];
  // .then(() => this.clearTemp())
  // .then(() => console.log('cleared temp', this.temp))

  clearTemp() {
    this.temp = [];
  }

  players = [];
  rounds = [];

  setTake(value, id, button) {
    if (value === '') {
      console.log('Empty string')
    } else if (this.temp.length === this.playercount) {
      for (let i=0; i < this.temp.length; i++) {
        if (this.temp[i].id === id) {
          this.temp[i].take = value;
          console.log('Player ' + id + ' successfully updated take to ' + value);
        }
      }
    } else if (this.temp.length < this.playercount) {
        // this.temp.take = value;
      if (this.temp.length === this.playercount) {
        button.disabled = false;
      }
      console.log('Player ' + id + ' successfully set takes to ' + value);
    }
  }

  calcInit() {

  }

  fetchNames() {
    this.data.getPlayerNames()
      .toPromise()
      .then((data) => this.players = data)
      .then(() => this.playercount = this.players.length)
      .then(() => console.log('Fetch players completed!'))
      .catch(this.handleError)
      .then(() => console.log(this.players));
  }

  fetchRounds() {
    this.data.getRounds()
      .toPromise()
      .then(data => this.rounds.push(data))
      .then(() => console.log('Fetch rounds completed!'))
      .catch(this.handleError)
      .then(() => console.log('after fetch rounds', this.rounds));
  }

  quitGame() {
    this.isActive = true;
    setTimeout(() => {
      this.router.navigateByUrl('/menu');
    }, 1000);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // constructor(private data: DataService) { }

  constructor(private data: DataService, private router: Router, route: ActivatedRoute) {
   route.params.subscribe(param => {
       let id = param['id '];
       console.log('Stuff has changed');
       // Do your stuff with id change.
   });
  }

  ngOnInit() {
    this.fetchNames();
  }

}

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

  animateImg() {
    this.isOn = true;
    setTimeout(() => {
      this.isOn = false;
    }, 1000);
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
      this.temp.push({ "id": id, "bid": value, "take": "", "score": ""});
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
      .then(() => this.clearTemp())
      .then(() => console.log('cleared temp', this.temp))
      .catch(this.handleError);
    // this.roundcount++;
    // this.cardcount--;
    // this.fetchRounds();
    // console.log(this.rounds);
  }

  temp = [];

  clearTemp() {
    this.temp = [];
  }

  players = [];
  rounds = [];

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
      .subscribe(
        data => this.rounds.push(data),
        error => console.error('Error: ' + error),
        () => console.log('Fetch rounds completed!')
      );
  }

  quitGame() {
    this.router.navigateByUrl('/menu');
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
    this.fetchRounds();
  }

}

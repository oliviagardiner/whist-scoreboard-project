import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-simpleboard',
  templateUrl: './simpleboard.component.html',
  styleUrls: [
    '../../../menu/menu.component.css',
    './simpleboard.component.css'
  ]
})
export class SimpleboardComponent implements OnInit {

  bidgame = true;
  playercount = 4;

  roundcount = 4;
  cardcount = 10;

  pushValue(value, id, button) {
    this.bids.push({ id: id, bid: value, take: '', score: ''});
    console.log('Player ' + id + ' successfully placed bid of ' + value);
    if (this.bids.length = this.playercount) {
      button.disabled = false;
    }
    console.log(this.bids);
  }

  // roundInit() {
  //   console.log(this.newround);
  //   this.data.pushToRounds({ id: this.newround});
  //   this.newround = [];
  //   console.log(this.newround);
  // }

  bids = [];

  players;
  rounds;

  fetchNames() {
    this.data.getPlayerNames()
      .subscribe(
        data => this.players = data,
        error => console.error('Error: ' + error),
        () => console.log('Fetch players completed!')
      );
  }

  fetchRounds() {
    this.data.getRounds()
      .subscribe(
        data => this.rounds = data,
        error => console.error('Error: ' + error),
        () => console.log('Fetch rounds completed!')
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchNames();
    this.fetchRounds();
  }

}

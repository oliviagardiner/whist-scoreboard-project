import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  getPlayerNames() {
    return this.http.get('https://whist-scoreboard.gomix.me/app/gamedata/playerdata')
      .map((res) => res.json());
  }

  getRounds() {
    return this.http.get('https://whist-scoreboard.gomix.me/app/gamedata/roundsdata')
      .map((res) => res.json());
  }

  pushToPlayers(obj) {
    // return this.http.post('https://whist-scoreboard.gomix.me//app/gamedata/playerdata', JSON.stringify({ "id": obj }), {headers: this.headers})
    //   .map((res) => res.json());
    return this.http.post('https://whist-scoreboard.gomix.me/app/gamedata/playerdata', obj)
      .map((res) => res.json());
  }

  pushToRounds(obj) {
    // return this.http.post('./app/gamedata/roundsdata.json', { "id": obj })
      // .map((res) => res.json());
    return this.http.post('https://whist-scoreboard.gomix.me/app/gamedata/roundsdata', [{ "id": obj }])
      .map((res) => res.json());
  }

  constructor(private http: Http) { }

}

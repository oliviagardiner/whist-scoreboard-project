import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  getPlayerNames() {
    return this.http.get('./app/gamedata/playerdata.json')
      .map((res) => res.json());
  }

  getRounds() {
    return this.http.get('./app/gamedata/roundsdata.json')
      .map((res) => res.json());
  }

  pushToRounds(obj) {
    return this.http.post('./app/gamedata/roundsdata.json', obj)
      .map((res) => res.json());
  }

  constructor(private http: Http) { }

}

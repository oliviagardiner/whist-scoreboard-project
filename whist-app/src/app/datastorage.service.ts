import { Injectable } from '@angular/core';

@Injectable()
export class DatastorageService {

  playercount = 0;
  players = [];

  addPlayer(name) {
    this.playercount++;
    let player = { id: this.playercount, name: name };
    this.players.push(player);
  }

  constructor() { }

}

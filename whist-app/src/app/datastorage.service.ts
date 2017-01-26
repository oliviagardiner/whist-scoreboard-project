import { Injectable } from '@angular/core';

@Injectable()
export class DatastorageService {

  playercount = 0;
  players = [];

  createPlayers(count) {
    for (let i=0; i < count; i++) {
      let player = {
        id: i+1,
        name: '',
        round1bid: '',
        round1take: '',
        round1score: '',
        round2bid: '',
        round2take: '',
        round2score: '',
        round3bid: '',
        round3take: '',
        round3score: '',
        round4bid: '',
        round4take: '',
        round4score: '',
        round5bid: '',
        round5take: '',
        round5score: '',
        round6bid: '',
        round6take: '',
        round6score: '',
        round7bid: '',
        round7take: '',
        round7score: '',
        round8bid: '',
        round8take: '',
        round8score: '',
        round9bid: '',
        round9take: '',
        round9score: '',
        round10bid: '',
        round10take: '',
        round10score: '',
        round11bid: '',
        round11take: '',
        round11score: '',
        round12bid: '',
        round12take: '',
        round12score: '',
        round13bid: '',
        round13take: '',
        round13score: '',
        currentscore: '',
      }
      this.players.push(player);
    }
  }

  setName(id, playername) {
    this.players[id].name = playername;
  }

  constructor() { }

}

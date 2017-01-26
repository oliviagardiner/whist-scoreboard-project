import { Component, OnInit } from '@angular/core';
import { DatastorageService } from '../../../datastorage.service';

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
  players = [
    {
      id: '1',
      name: 'Sally',
      // round1bid: '3',
      // round1take: '4',
      // round1score: '4',
      // round2bid: '2',
      // round2take: '2',
      // round2score: '16',
      // round3bid: '4',
      // round3take: '3',
      // round3score: '19',
      // round4bid: '3',
      // round4take: '3',
      // round4score: '32',
      // round5bid: '',
      // round5take: '',
      // round5score: '',
      // round6bid: '',
      // round6take: '',
      // round6score: '',
      // round7bid: '',
      // round7take: '',
      // round7score: '',
      // round8bid: '',
      // round8take: '',
      // round8score: '',
      // round9bid: '',
      // round9take: '',
      // round9score: '',
      // round10bid: '',
      // round10take: '',
      // round10score: '',
      // round11bid: '',
      // round11take: '',
      // round11score: '',
      // round12bid: '',
      // round12take: '',
      // round12score: '',
      // round13bid: '',
      // round13take: '',
      // round13score: '',
      currentscore: '32',
    },
    {
      id: '2',
      name: 'John',
      // round1bid: '1',
      // round1take: '3',
      // round1score: '3',
      // round2bid: '2',
      // round2take: '2',
      // round2score: '15',
      // round3bid: '3',
      // round3take: '5',
      // round3score: '20',
      // round4bid: '3',
      // round4take: '2',
      // round4score: '22',
      // round5bid: '',
      // round5take: '',
      // round5score: '',
      // round6bid: '',
      // round6take: '',
      // round6score: '',
      // round7bid: '',
      // round7take: '',
      // round7score: '',
      // round8bid: '',
      // round8take: '',
      // round8score: '',
      // round9bid: '',
      // round9take: '',
      // round9score: '',
      // round10bid: '',
      // round10take: '',
      // round10score: '',
      // round11bid: '',
      // round11take: '',
      // round11score: '',
      // round12bid: '',
      // round12take: '',
      // round12score: '',
      // round13bid: '',
      // round13take: '',
      // round13score: '',
      currentscore: '22',
    },
    {
      id: '3',
      name: 'Mike',
      // round1bid: '4',
      // round1take: '1',
      // round1score: '1',
      // round2bid: '4',
      // round2take: '4',
      // round2score: '15',
      // round3bid: '3',
      // round3take: '1',
      // round3score: '16',
      // round4bid: '2',
      // round4take: '4',
      // round4score: '20',
      // round5bid: '',
      // round5take: '',
      // round5score: '',
      // round6bid: '',
      // round6take: '',
      // round6score: '',
      // round7bid: '',
      // round7take: '',
      // round7score: '',
      // round8bid: '',
      // round8take: '',
      // round8score: '',
      // round9bid: '',
      // round9take: '',
      // round9score: '',
      // round10bid: '',
      // round10take: '',
      // round10score: '',
      // round11bid: '',
      // round11take: '',
      // round11score: '',
      // round12bid: '',
      // round12take: '',
      // round12score: '',
      // round13bid: '',
      // round13take: '',
      // round13score: '',
      currentscore: '20',
    },
    {
      id: '4',
      name: 'Tina',
      // round1bid: '4',
      // round1take: '5',
      // round1score: '5',
      // round2bid: '3',
      // round2take: '4',
      // round2score: '9',
      // round3bid: '3',
      // round3take: '2',
      // round3score: '11',
      // round4bid: '1',
      // round4take: '1',
      // round4score: '22',
      // round5bid: '',
      // round5take: '',
      // round5score: '',
      // round6bid: '',
      // round6take: '',
      // round6score: '',
      // round7bid: '',
      // round7take: '',
      // round7score: '',
      // round8bid: '',
      // round8take: '',
      // round8score: '',
      // round9bid: '',
      // round9take: '',
      // round9score: '',
      // round10bid: '',
      // round10take: '',
      // round10score: '',
      // round11bid: '',
      // round11take: '',
      // round11score: '',
      // round12bid: '',
      // round12take: '',
      // round12score: '',
      // round13bid: '',
      // round13take: '',
      // round13score: '',
      currentscore: '22',
    },
  ];

  rounds = [
    {
      id: [
        {
          id: '1',
          bid: '3',
          take: '4',
          score: '4'
        },
        {
          id: '2',
          bid: '1',
          take: '3',
          score: '3'
        },
        {
          id: '3',
          bid: '4',
          take: '1',
          score: '1'
        },
        {
          id: '4',
          bid: '4',
          take: '5',
          score: '5'
        },
      ]
    },
    {
      id: []
    },
  ]

  roundcount = 4;
  cardcount = 10;

  pushValue(value, id) {
    let playerbid = { id: id, }
    console.log(value, id);
  }

  newRound() {
    console.log();
  }

  tempbid = [
    {
      id: '1',
      bid: '',
      take: '',
      score: '',
    },
    {
      id: '2',
      bid: '',
      take: '',
      score: '',
    },
    {
      id: '3',
      bid: '',
      take: '',
      score: '',
    },
    {
      id: '4',
      bid: '',
      take: '',
      score: '',
    },
  ]

  // initRound() {
  //   this.modal.confirm()
  //     .size('lg')
  //     .isBlocking(true)
  //     .showClose(false)
  //     .keyboard(27)
  //     .title('Hello World')
  //     .body('A Customized Modal')
  //     .okBtn('Confirm')
  //     .cancelBtn('Cancel')
  //     .open();
  // }

  constructor(private dataStorage: DatastorageService) { }

  ngOnInit() {
  }

}

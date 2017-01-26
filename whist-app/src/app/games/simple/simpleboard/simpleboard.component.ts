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

  playercount = 4;
  players = [
    {
      id: '1',
      name: 'Sally'
    },
    {
      id: '2',
      name: 'John'
    },
    {
      id: '3',
      name: 'Mike'
    },
    {
      id: '4',
      name: 'Tina'
    },
    {
      id: '5',
      name: 'Dale'
    },
    {
      id: '6',
      name: 'Kim'
    },
  ];

  roundcount = 1;

  round1 = [
    {
      id: '1',
      bids: '3',
      takes: '4'
    },
    {
      id: '2',
      bids: '4',
      takes: '2'
    },
    {
      id: '3',
      bids: '5',
      takes: '5'
    },
    {
      id: '4',
      bids: '3',
      takes: '1'
    },
  ]

  constructor(private dataStorage: DatastorageService) { }

  ngOnInit() {
  }

}

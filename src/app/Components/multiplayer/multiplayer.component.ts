import { Component, OnInit } from '@angular/core';
declare const MultiPlayerTimer:any;
@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    MultiPlayerTimer();
  }

}

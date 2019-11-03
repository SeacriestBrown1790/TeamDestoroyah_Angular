import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtubepost',
  template: `
  
  <youtube-player
    [videoId]="id"
    (ready)="savePlayer($event)"
    (change)="onStateChange($event)"
  ></youtube-player>
`
})
export class YoutubepostComponent{

  player: YT.Player;



  id: string = 'qDuKsiwS5xw';
 
  savePlayer(player) {
    this.player = player;
    console.log('Vide Url: ', player.getVideoUrl());
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}

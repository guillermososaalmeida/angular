import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    // alert(`${this.username} likes playing ${gameName}`);
  }

  games = [
    {
      id: 1,
      name: 'Breath of the Wild',
    },
    {
      id: 2,
      name: 'Tears of the Kingdom',
    },
    {
      id: 3,
      name: 'Hogwarts Legacy',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  public tabs: String[];

  constructor() {
    this.tabs = ['Videoclips', 'Cortometraje', 'Publicidad', 'Documentales', 'Eventos', 'Youtube']
  }
}

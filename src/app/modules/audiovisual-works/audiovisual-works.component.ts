import { Component } from '@angular/core';
import { trabajosVideoclips } from 'src/app/models/trabajo-videoclips.model';

@Component({
  selector: 'app-audiovisual-works',
  templateUrl: './audiovisual-works.component.html',
  styleUrls: ['./audiovisual-works.component.sass']
})
export class AudiovisualWorksComponent {
  public trabajosVideoclips: trabajosVideoclips[]
  constructor() {
    this.trabajosVideoclips = [
    {
      title: 'Titulo1',
      artist: 'Autor'
    },

    {
      title: 'Titulo2',
      artist: 'Autor'
    }
    ]
  }
}

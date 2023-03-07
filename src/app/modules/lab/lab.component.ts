import { Component } from '@angular/core';
import { trabajosVideoclips } from 'src/app/models/trabajo-videoclips.model';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.sass']
})
export class LabComponent {
  public trabajosVideoclips: trabajosVideoclips[]
  constructor() {
    this.trabajosVideoclips = [
    {
      title: 'Artista1',
      artist: 'Cancion1'
    },

    {
      title: 'Artista2',
      artist: 'Cancion2'
    },
    {
      title: 'Artista3',
      artist: 'Cancion3'
    },
    {
      title: 'Artista4',
      artist: 'Cancion4'
    },
    {
      title: 'Artista5',
      artist: 'Cancion5'
    },

    {
      title: 'Artista6',
      artist: 'Cancion6'
    },
    {
      title: 'Artista7',
      artist: 'Cancion7'
    },
    {
      title: 'Artista8',
      artist: 'Cancion8'
    },

  ]
  }
}

import { Component } from '@angular/core';
import { carouselImage } from 'src/app/models/carousel-image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {

  public logo: string;
  constructor() {
    this.logo = 'LOGO'
  }

}

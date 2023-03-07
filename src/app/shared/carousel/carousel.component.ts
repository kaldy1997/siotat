import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

    public images: string[] = [
        'assets/img/_MG_2241.png',
        'assets/img/_MG_9056.JPG',
        'assets/img/DSC00291.JPG',
        'assets/img/DSC00363.JPG',
        'assets/img/DSC01406.png',
        'assets/img/DSC03531.jpg',
        'assets/img/DSC03638.jpg',
        'assets/img/DSC03653-2.jpg',
    ];

    public customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 2000,
        fluidSpeed: true,
        autoWidth: true,
        autoHeight: true,
        dots: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            100: {
                items: 2
            },
            200: {
                items: 3
            },
            300: {
                items: 4
            }
        }
    };
}

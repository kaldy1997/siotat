import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

    public logo: string;
    constructor() {
        this.logo = 'LOGO'
    }

    public images: string[] = [
        'assets/img/horizontal/workingImage1.png',
        'assets/img/horizontal/workingImage2.png',
        'assets/img/horizontal/workingImage3.png',
        'assets/img/horizontal/workingImage4.png',
        'assets/img/horizontal/workingImage5.png',
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

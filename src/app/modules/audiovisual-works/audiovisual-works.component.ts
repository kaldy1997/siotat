import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-audiovisual-works',
  templateUrl: './audiovisual-works.component.html',
  styleUrls: ['./audiovisual-works.component.sass']
})
export class AudiovisualWorksComponent {

  public youtubeUrls: string[]
  public isMobile: boolean;

  constructor() {
    this.isMobile = UtilsService.isMobileDevice();
    this.youtubeUrls = [
      'SBPiRH78IlA',
      'hRHNjIt_kTs',
      'yx2a55JtsRM',
      'U6XylxUckBI',
      'ENvXIBtyR5M',
      'MJlrrWR7Bz0',
      'U3WLNvW2BeI',
      '3tSgdkdCJpE',
      'qEjgpxoGGxs',
      'RPRnR7l-k_s'
    ]
  }
}

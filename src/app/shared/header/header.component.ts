import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  public tabs: String[];

  constructor(private router: Router) {
    this.tabs = ['Proyectos', 'Home', 'Laboratorio']
  }

  public navigate(route: any): void {
    switch(route) {
      case 'Proyectos': {
        this.router.navigateByUrl('/audiovisual-works');
        break;
      }
      case 'Home': {
        this.router.navigateByUrl('');
        break;
      }
      case 'Laboratorio': {
        this.router.navigateByUrl('lab');
        break;
      }
    }
  }
}

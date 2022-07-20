import { Component } from '@angular/core';
import { LayoutService } from './config/injections/layout/layout.service';
import { LayoutInterface } from './config/injections/layout/layout.interface';

@Component({
  selector: 'uwu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOpenedMenu: boolean = true;
  layout!: LayoutInterface;

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService
      .getLayout()
      .subscribe((layout: LayoutInterface) => (this.layout = layout));
  }
}

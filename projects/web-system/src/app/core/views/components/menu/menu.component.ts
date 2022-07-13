import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuItemInterface } from '../../../../shared/interfaces/ItemMenu.interface';

import { MenuService } from '../../../../shared/services/menu/menu.service';

@Component({
  selector: 'uwu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  menu: MenuItemInterface[];

  constructor(private readonly menuService: MenuService) {
    this.menu = this.menuService.getMenu();
  }

  ngOnInit(): void {}
}

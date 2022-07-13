import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemInterface } from '../../interfaces/ItemMenu.interface';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'uwu-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  menuItem: MenuItemInterface;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService
  ) {
    const currentPath: string =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
      
    this.menuItem = this.menuService.getMenuItemByPath(currentPath);
  }

  ngOnInit(): void {}
}

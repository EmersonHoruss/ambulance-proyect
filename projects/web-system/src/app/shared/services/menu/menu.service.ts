import { Injectable } from '@angular/core';
import { MenuItemInterface } from '../../interfaces/ItemMenu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: MenuItemInterface[] = [
    { title: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
    { title: 'Driver', icon: 'driver', url: '/driver' },
    { title: 'History', icon: 'history', url: '/history' },
    { title: 'Medic', icon: 'medic', url: '/medic' },
    { title: 'User', icon: 'user', url: '/user' },
  ];

  constructor() {}

  getMenu(): MenuItemInterface[] {
    // two ways to do copies of objects
    // return [...this.menu];
    return Object.assign([], this.menu);
  }

  getMenuItemByPath(path: string): MenuItemInterface {
    return this.menu.find(
      (e: MenuItemInterface) => e.url === path
    ) as MenuItemInterface;
  }
}

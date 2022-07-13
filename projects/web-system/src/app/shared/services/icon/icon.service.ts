import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconInterface } from '../../interfaces/Icon.interface';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  icons: IconInterface[] = [
    {
      name: 'dashboard',
      url: '../assets/icons/dashboard.svg',
    },
    {
      name: 'driver',
      url: '../assets/icons/driver.svg',
    },
    {
      name: 'history',
      url: '../assets/icons/history.svg',
    },
    {
      name: 'medic',
      url: '../assets/icons/medic.svg',
    },
    {
      name: 'user',
      url: '../assets/icons/user.svg',
    },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    for (let icon of this.icons)
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
  }
}

// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// APP
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // ANGULAR

    // ANGULAR MATERIAL

    // APP
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
  ],
  imports: [
    // ANGULAR
    CommonModule,
    RouterModule,

    // ANGULAR MATERIAL
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,

    // APP
  ],
  exports: [
    // ANGULAR

    // ANGULAR MATERIAL

    // APP
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
  ],
})
export class CoreModule {}

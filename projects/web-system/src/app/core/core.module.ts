// ANGULAR
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// FLEX LAYOUT MODULE
import { FlexLayoutModule } from '@angular/flex-layout';

// APP
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';

@NgModule({
  declarations: [
    // ANGULAR

    // ANGULAR MATERIAL

    // APP
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    PageLoginComponent,
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

    // FLEX LAYOUT MODULE
    FlexLayoutModule,

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}

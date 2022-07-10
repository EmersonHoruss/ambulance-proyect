// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// APP
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    // ANGULAR
    CommonModule,

    // ANGULAR MATERIAL
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

    // APP
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}

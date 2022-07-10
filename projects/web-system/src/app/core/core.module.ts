// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// APP
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { HeaderComponent } from './views/components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    // ANGULAR
    CommonModule,

    // ANGULAR MATERIAL
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    
    // APP
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}

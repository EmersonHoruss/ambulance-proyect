// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

// APP
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    // APP
    TitleComponent,
    ContainerComponent,
    TableComponent,
  ],
  imports: [
    // ANGULAR
    CommonModule,

    // ANGULAR MATERIAL
    MatCardModule,
    MatIconModule,
    MatTableModule,

    // APP
  ],
  exports: [
    // ANGULAR

    // ANGULAR MATERIAL
    MatButtonModule,
    MatIconModule,

    // APP
    TitleComponent,
    ContainerComponent,
    TableComponent,
  ],
})
export class SharedModule {}

// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

// NG PERFECT SCROLL BAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// APP
import { ContainerComponent } from './components/container/container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    // APP
    ContainerComponent,
    PaginatorComponent,
    TableComponent,
    TitleComponent,
  ],
  imports: [
    // ANGULAR
    CommonModule,

    // ANGULAR MATERIAL
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,

    // APP
  ],
  exports: [
    // ANGULAR

    // ANGULAR MATERIAL
    MatButtonModule,
    MatIconModule,

    // NGX PERFECT SCROLL BAR
    PerfectScrollbarModule,

    // APP
    ContainerComponent,
    PaginatorComponent,
    TableComponent,
    TitleComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}

// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// APP
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    // APP
    TitleComponent,
    ContainerComponent,
  ],
  imports: [
    // ANGULAR
    CommonModule,

    // ANGULAR MATERIAL
    MatCardModule,
    MatIconModule,

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
  ],
})
export class SharedModule {}

//ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//ANGULAR MATERIAL

//APP
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    // ANGULAR
    CommonModule,
    HistoryRoutingModule,

    // ANGULAR MATERIAL

    // APP
    SharedModule,
  ],
})
export class HistoryModule {}

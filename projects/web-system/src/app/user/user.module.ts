// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL

// APP
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [FormComponent, PageListComponent],
  imports: [
    // ANGULAR
    CommonModule,
    UserRoutingModule,

    // ANGULAR MATERIAL

    // APP
    SharedModule,
  ],
})
export class UserModule {}

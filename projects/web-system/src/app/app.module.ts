import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestComponent } from './garbage/test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    // ANGULAR
    BrowserModule,
    AppRoutingModule,

    // ANGULAR MATERIAL
    BrowserAnimationsModule,
    MatSidenavModule,

    // APP
    CoreModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

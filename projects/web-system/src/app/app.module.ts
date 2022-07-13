// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

// APP
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TestComponent } from './garbage/test/test.component';
import { IconService } from './shared/services/icon/icon.service';

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
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}

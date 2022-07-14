// ANGULAR
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

// APP
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TestComponent } from './garbage/test/test.component';
import { IconService } from './shared/services/icon/icon.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorService } from './shared/services/paginator/paginator.service';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    // ANGULAR
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,

    // ANGULAR MATERIAL
    BrowserAnimationsModule,
    MatSidenavModule,

    // APP
    CoreModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorService }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}

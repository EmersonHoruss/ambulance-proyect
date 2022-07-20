import { NgModule, ModuleWithProviders } from '@angular/core';
import { LAYOUT_TOKEN } from './layout.token';
import { LayoutInterface } from './layout.interface';

@NgModule()
export class LayoutModule {
  static foorRoot(config: LayoutInterface): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: LAYOUT_TOKEN, useValue: config }],
    };
  }
}

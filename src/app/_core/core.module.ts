import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { MQService } from './services/media-query.services';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,

  ],
  providers: [ MQService ],
  declarations: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

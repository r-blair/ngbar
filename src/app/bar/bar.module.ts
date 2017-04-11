import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarBoxComponent } from './bar-box/bar-box.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BarButtonComponent } from './bar-button/bar-button.component';
import { BarLogoComponent } from './bar-logo/bar-logo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { BarLogoComponent } from './bar-logo/bar-logo.component';
// import { BarNavComponent } from './bar-nav/bar-nav.component';
// import { BarButtonComponent } from './bar-button/bar-button.component';


@NgModule({
  imports: [CommonModule, FlexLayoutModule],

  exports: [BarBoxComponent, BarNavComponent, BarButtonComponent, BarLogoComponent],

  declarations: [BarBoxComponent, BarNavComponent, BarButtonComponent, BarLogoComponent]
})
export class BarModule { }

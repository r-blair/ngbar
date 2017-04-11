import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';

import { BarModule } from './bar/bar.module';
import { BarBoxComponent } from './bar/bar-box/bar-box.component';

import { AppComponent }  from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  imports:      [
    BrowserModule,
    CoreModule,
    SharedModule, // Do I want this here?
    FlexLayoutModule,
    MaterialModule,
    BarModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

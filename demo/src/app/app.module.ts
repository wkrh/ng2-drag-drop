import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo-component';

import { DragModule } from './cross-module/drag.module';
import { DropModule } from './cross-module/drop.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DragModule, DropModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent],
  providers: []
})
export class AppModule {}

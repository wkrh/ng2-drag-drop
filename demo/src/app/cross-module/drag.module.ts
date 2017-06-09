import { NgModule } from '@angular/core';
import { CrossModuleDragDemoComponent } from './drag/drag.component';

import { Ng2DragDropModule } from 'ng2-drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CrossModuleDragDemoComponent],
    imports: [BrowserModule, FormsModule, Ng2DragDropModule.forRoot()],
    exports: [CrossModuleDragDemoComponent]
})
export class DragModule {

}
import { NgModule } from '@angular/core';
import { CrossModuleDropDemoComponent } from './drop/drop.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [CrossModuleDropDemoComponent],
    imports: [BrowserModule, FormsModule, Ng2DragDropModule.forRoot()],
    exports: [CrossModuleDropDemoComponent]
})
export class DropModule {

}
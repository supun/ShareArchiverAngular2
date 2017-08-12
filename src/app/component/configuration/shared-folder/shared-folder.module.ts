import { SharedFolderComponent } from './shared-folder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedFolderRoutes } from './shared-folder.route';
@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(SharedFolderRoutes),
         [MaterialModule.forRoot(),FlexLayoutModule]
        ],
    declarations: [SharedFolderComponent],
    entryComponents: [
        
    ],
    exports: [SharedFolderComponent],
    providers: [
    ]
})

export class  SharedFolderModule {
}

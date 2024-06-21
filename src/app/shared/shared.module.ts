import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError } from '@angular/material/form-field';

import { SharedFormMessageComponent } from './components/form/message/message.component';

@NgModule({
    declarations: [
        SharedFormMessageComponent
    ],
    exports: [
        SharedFormMessageComponent
    ],
    imports: [
        CommonModule,
        MatError
    ]
})
export class SharedModule {}

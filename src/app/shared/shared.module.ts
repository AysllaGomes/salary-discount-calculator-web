import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError } from '@angular/material/form-field';

import { AlertService } from './service/alert.service';

import { SharedFormMessageComponent } from './components/form/message/message.component';

import { OnlyAcceptNumberDotOrCommaDirective } from './directives/only-accept-number-dot-or-comma.directive';

@NgModule({
    declarations: [
        SharedFormMessageComponent,
        OnlyAcceptNumberDotOrCommaDirective,
    ],
    exports: [
        SharedFormMessageComponent,
        OnlyAcceptNumberDotOrCommaDirective,
    ],
    imports: [
        CommonModule,
        MatError
    ],
    providers: [
        AlertService
    ]
})
export class SharedModule {}

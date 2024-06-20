import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import { FormMessageService } from './form/form-message.service';

@Injectable({
    providedIn: 'root'
})
export class FormUtilsService {

    protected _when: string[] = ['dirty', 'touched'];

    constructor(
        protected formMessageService: FormMessageService
    ) {}

    get when(): string[] {
        return this._when;
    }

    get(form: AbstractControl, index: string): AbstractControl {
        const controlNameList = index.split('.');

        let control = form;

        let controlName: string;

        while (controlName = controlNameList.shift()) {
            control = control.get(controlName);
        }

        return control;
    }

    validate(formGroup: FormGroup | FormArray): boolean {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsDirty();
            if (control instanceof FormGroup || control instanceof FormArray) {
                this.validate(control);
            }
        });
        return formGroup.valid;
    }

    showValidationMessage(control: AbstractControl): boolean {
        let verifyStatus: boolean;

        for (const status of this.when) {
            verifyStatus = verifyStatus || control[status];
        }

        return control.invalid && (verifyStatus);
    }

    /**
     * Retorna o texto relativo a mensagem de validação do campo
     */
    getMessage(control: AbstractControl, messageName: string): string {
        const messageCallback = this.formMessageService[messageName];

        return messageCallback
            ? messageCallback(control)
            : this.formMessageService.messageNotFound;
    }
}

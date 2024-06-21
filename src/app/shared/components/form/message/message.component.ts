import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { FormUtilsService } from '../../../service/form-utils.service';

@Component({
    selector: 'app-shared-component-form-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class SharedFormMessageComponent implements OnInit {

    @Input()
    public field: AbstractControl | FormControl;

    @Input()
    public messageOverwrite = {};

    constructor(
        protected formUtilsService: FormUtilsService
    ) {}

    ngOnInit(): void {
        if (!this.field) {
            throw new Error('O campo "field" do componente "FormMessageComponent" está apontando para um FormControl inexistente');
        }
    }

    /**
     * Retorna a lista de erros
     */
    getMessageList(): string[] {
        const errorMessageLists = [];
        const showMessage = this.formUtilsService.showValidationMessage(this.field);

        if (this.field.errors && showMessage) {

            const fieldErrorsKeys = Object.keys(this.field.errors);

            for (const errorType of fieldErrorsKeys) {

                const messageText = this.messageOverwrite[errorType]
                    ? this.messageOverwrite[errorType]
                    : this.formUtilsService.getMessage(this.field, errorType);

                errorMessageLists.push(messageText);
            }
        }

        return errorMessageLists;
    }

}

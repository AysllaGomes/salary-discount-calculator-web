import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salary-discount-form',
  templateUrl: './salary-discount-form.component.html',
  styleUrl: './salary-discount-form.component.scss'
})
export class SalaryDiscountFormComponent implements OnInit {

    @Output()
    onCreateForm: EventEmitter<FormGroup> = new EventEmitter();

    public form: FormGroup;

    constructor(
        protected formBuilder: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.createForm();
        this.onCreateForm.emit(this.form);
    }

    createForm(): FormGroup {
        this.form = this.formBuilder.group({
            salary: [
                null,
                Validators.required
            ],
            discount: [
                null,
                Validators.required
            ],
            dependentCount: [
                null,
                Validators.required
            ]
        });

        return this.form;
    }
}

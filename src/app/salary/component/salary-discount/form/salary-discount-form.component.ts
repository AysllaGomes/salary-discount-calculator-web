import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salary-discount-form',
  templateUrl: './salary-discount-form.component.html',
  styleUrl: './salary-discount-form.component.scss'
})
export class SalaryDiscountFormComponent implements OnInit {

    @Output()
    public onCreateForm: EventEmitter<FormGroup> = new EventEmitter();

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
                0,
            ],
            dependentCount: [
                0,
            ]
        });

        return this.form;
    }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDiscountFormComponent } from './salary-discount-form.component';

describe('SalaryListComponent', (): void => {
    let component: SalaryDiscountFormComponent;
    let fixture: ComponentFixture<SalaryDiscountFormComponent>;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            declarations: [SalaryDiscountFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(SalaryDiscountFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});

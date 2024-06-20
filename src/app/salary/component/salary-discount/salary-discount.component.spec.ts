import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDiscountComponent } from './salary-discount.component';

describe('SalaryListComponent', (): void => {
    let component: SalaryDiscountComponent;
    let fixture: ComponentFixture<SalaryDiscountComponent>;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            declarations: [SalaryDiscountComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(SalaryDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});

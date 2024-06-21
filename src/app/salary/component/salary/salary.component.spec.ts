import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryComponent } from './salary.component';

describe('SalaryComponent', (): void => {
    let component: SalaryComponent;
    let fixture: ComponentFixture<SalaryComponent>;

    beforeEach(async (): Promise<void> => {
        await TestBed.configureTestingModule({
            declarations: [SalaryComponent],
            imports: [FlexLayoutModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach((): void => {
        fixture = TestBed.createComponent(SalaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should render title in a h3 tag', (): void => {
        const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h3')?.textContent).toContain('Calculadora de Salário Bruto');
    });

    it('should render app-salary-discount component', (): void => {
        const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-salary-discount')).toBeTruthy();
    });

    it('should render app-salary-about component', (): void => {
        const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-salary-about')).toBeTruthy();
    });
});

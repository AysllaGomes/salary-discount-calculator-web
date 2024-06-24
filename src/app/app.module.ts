import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SalaryModule } from './salary/module/salary.module';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        SalaryModule,
    ],
    providers: [
        provideAnimationsAsync(),
        provideEnvironmentNgxMask(maskConfig),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

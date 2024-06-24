import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatOption, MatSelect } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SalaryModule } from './salary/module/salary.module';
import {FlexModule} from "@angular/flex-layout";

const maskConfig: Partial<IConfig> = {
    validation: false,
};

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        SalaryModule,
        MatLabel,
        MatSelect,
        MatOption,
        FlexModule,
    ],
    providers: [
        provideAnimationsAsync(),
        provideEnvironmentNgxMask(maskConfig),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

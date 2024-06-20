import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { SalaryModule } from "./salary/salary.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    RouterOutlet,
    SalaryModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

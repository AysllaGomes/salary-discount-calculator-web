import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SalaryComponent } from "./salary.component";

@NgModule({
  declarations: [
    SalaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SalaryComponent
  ]
})
export class SalaryModule {}

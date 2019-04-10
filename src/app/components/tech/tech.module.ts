import { TechComponent } from './tech.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TechComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TechComponent
  ]
})
export class TechModule { }

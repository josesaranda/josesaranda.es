import { TechComponent } from './tech.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [TechComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    TechComponent
  ]
})
export class TechModule { }

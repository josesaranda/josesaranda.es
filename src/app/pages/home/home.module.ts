import { DirectivesModule } from './../../directives/directives';
import { ProgressModule } from './../../components/progress/progress.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';
import { TechModule } from 'src/app/components/tech/tech.module';
import { EducationModule } from 'src/app/components/education/education.module';
import { ExperienceModule } from 'src/app/components/experience/experience.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    TechModule,
    ProgressModule,
    EducationModule,
    ExperienceModule,
    DirectivesModule
  ]
})
export class HomeModule { }

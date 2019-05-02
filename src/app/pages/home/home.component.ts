import { Component, OnInit } from '@angular/core';
import { EducationOptions } from 'src/app/components/education/education.component';
import { ExperienceOptions } from 'src/app/components/experience/experience.component';
import { ProgressOptions } from 'src/app/components/progress/progress.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  technologies: any[] = [];
  educations: EducationOptions[] = [];
  experiences: ExperienceOptions[] = [];

  progressList1: ProgressOptions[] = [];
  progressList2: ProgressOptions[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getTechnologies();
    this.getEducations();
    this.getExperiences();
    this.getProgress();
  }

  private getTechnologies(): void {
    this.httpClient.get('/assets/data/technologies.json').subscribe(technologies => {
      this.technologies = <any[]>technologies;
    });
  }

  private getEducations(): void {
    this.httpClient.get('/assets/data/educations.json').subscribe(educations => {
      this.educations = <EducationOptions[]>educations;
    });
  }

  private getExperiences(): void {
    this.httpClient.get('/assets/data/experiences.json').subscribe(experiences => {
      this.experiences = <ExperienceOptions[]>experiences;
    });
  }

  private getProgress(): void {
    this.httpClient.get('/assets/data/progress.json').subscribe((progress: any) => {
      this.progressList1 = <ProgressOptions[]>progress.list1;
      this.progressList2 = <ProgressOptions[]>progress.list2;
    });
  }
}

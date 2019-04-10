import { Component, OnInit } from '@angular/core';
import { EducationOptions } from 'src/app/components/education/education.component';
import { ExperienceOptions } from 'src/app/components/experience/experience.component';
import { ProgressOptions } from 'src/app/components/progress/progress.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  educations: EducationOptions[] = [];
  experiences: ExperienceOptions[] = [];
  listOfProgress1: ProgressOptions[] = [];
  listOfProgress2: ProgressOptions[] = [];
  technologies: any[] = [];

  constructor() { }

  ngOnInit() {
    this.getEducations();
    this.getExperiences();
    this.getProgress1();
    this.getProgress2();
    this.getTechnologies();
  }


  private getEducations(): void {
    this.educations.push({
      title: 'Grado en Ingeniería de Software',
      curse: 'Universidad de Málaga',
      date: 'Fecha de estudios 2012 - 2016'
    });

    this.educations.push({
      title: 'Curso de typescript',
      curse: 'Udemy'
    });

    this.educations.push({
      title: 'Certificación de participación (5ª Ed.)',
      summary: 'Desarrollo en HTML5, CSS y Javascript de Apps Web, Android, iOS...',
      curse: 'Miriada X'
    });
  }

  private getExperiences(): void {
    this.experiences.push({
      title: 'CTO',
      company: 'Sombradoble S.L - Málaga -',
      date: 'Sept 2016 - Actualidad'
    });

    this.experiences.push({
      title: 'Socio y Fundador',
      company: 'NoWait S.Coop.And',
      date: '2015 - 2017'
    });

    this.experiences.push({
      title: 'Becario Desarrollo de Software',
      company: 'Sombradoble S.L - Málaga -',
      date: 'Abril 2016 - Julio 2016'
    });
  }

  private getProgress1(): void {
    this.listOfProgress1.push({
      name: 'NodeJS',
      progress: 90,
      color: 'yellow'
    });
    this.listOfProgress1.push({
      name: 'Express',
      progress: 90,
      color: 'yellow'
    });
    this.listOfProgress1.push({
      name: 'Loopback',
      progress: 90,
      color: 'yellow'
    });
    this.listOfProgress1.push({
      name: 'JWT',
      progress: 100,
      color: 'yellow'
    });
    this.listOfProgress1.push({
      name: 'EJS',
      progress: 100,
      color: 'yellow'
    });
    this.listOfProgress1.push({
      name: 'Bootstrap',
      progress: 80,
      color: 'green'
    });
    this.listOfProgress1.push({
      name: 'Angular',
      progress: 100,
      color: 'green'
    });
    this.listOfProgress1.push({
      name: 'Ionic UI',
      progress: 90,
      color: 'green'
    });
    this.listOfProgress1.push({
      name: 'Angular Material',
      progress: 90,
      color: 'green'
    });
    this.listOfProgress1.push({
      name: 'Jasmine',
      progress: 80,
      color: 'grey'
    });
    this.listOfProgress1.push({
      name: 'Karma',
      progress: 80,
      color: 'grey'
    });
  }

  private getProgress2(): void {
    this.listOfProgress2.push({
      name: 'ShellScript',
      progress: 70,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'SSH',
      progress: 90,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'FTP',
      progress: 90,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Apache',
      progress: 80,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Nginx',
      progress: 90,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Swagger',
      progress: 80,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Git',
      progress: 100,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Nodemailer',
      progress: 90,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Promises',
      progress: 90,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'MomentJS',
      progress: 100,
      color: 'aqua'
    });
    this.listOfProgress2.push({
      name: 'Babel',
      progress: 90,
      color: 'aqua'
    });
  }

  private getTechnologies(): void {
    this.technologies.push({
      image: '/assets/icons/logo-typescript.svg',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-java.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-mysql.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-mongo.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-ionic.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-js.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-html.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-css.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-php.png',
      level: 5
    });
    this.technologies.push({
      image: '/assets/icons/logo-wordpress.png',
      level: 5
    });
  }
}

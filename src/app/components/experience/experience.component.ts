import { Component, OnInit, Input } from '@angular/core';

export interface ExperienceOptions {
  title?: string;
  company?: string;
  summary?: string;
  date?: string;
}

@Component({
  selector: 'josesaranda-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experienceOptions: ExperienceOptions;

  constructor() { }

  ngOnInit() {
  }

}

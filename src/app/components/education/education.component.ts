import { Component, OnInit, Input } from '@angular/core';

export interface EducationOptions {
  title?: string;
  curse?: string;
  summary?: string;
  date?: string;
}

@Component({
  selector: 'josesaranda-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input() educationOptions: EducationOptions;

  constructor() { }

  ngOnInit() { }

}

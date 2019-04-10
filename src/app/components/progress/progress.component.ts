import { Component, OnInit, Input } from '@angular/core';

export interface ProgressOptions {
  name?: string;
  progress?: number;
  color?: string;
}

@Component({
  selector: 'josesaranda-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() progressOptions: ProgressOptions;

  constructor() { }

  ngOnInit() { }

}

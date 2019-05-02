import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'josesaranda-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  @Input() image: string;
  @Input() level: number;
  @Input() name: string = '';

  constructor() { }

  ngOnInit() {

  }

}

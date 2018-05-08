import { Component, OnInit } from '@angular/core';

import * as config from '../../../../config/config.json';
declare function require(url: string);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private background = (<any>config).background;
  private text = (<any>config).text;
  private textLarge = (<any>config).textlarge;
  private twitter = (<any>config).twitter;
  private data = {
    sourceType: 'url',
    url: this.twitter};
  constructor() {}

  ngOnInit() {
  }

}

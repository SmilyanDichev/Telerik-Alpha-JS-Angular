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
  // private twitterOptions: string = `{
  //   tweetLimit: 1,
  //   height: 10,
  //   borderColor: '#a3349f',
  //   chrome: ['noheader', 'nofooter', 'noborders', 'transparent' , 'noscrollbar']
  // }`;

  constructor() { }

  ngOnInit() {
    // console.log(this.background);
    // console.log(config.default);
  }

}

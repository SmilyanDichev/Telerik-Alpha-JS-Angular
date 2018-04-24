import { Component, OnInit } from '@angular/core';
import * as config from '../../../../config/config.json';
declare function require(url: string)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  background = (<any>config).background;
  constructor() { }

  ngOnInit() {
    // console.log(this.background);
    // console.log(config.default);
  }

}

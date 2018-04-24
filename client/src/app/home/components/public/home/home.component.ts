import { Component, OnInit } from '@angular/core';
// import * as configJson from '../../../../config/config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // backgroundUlr = configJson.homePageBackgroundUrl;
  constructor() { }

  ngOnInit() {
    // console.log(configJson);
  }

}

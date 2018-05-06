import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-links',
  templateUrl: './admin-links.component.html',
  styleUrls: ['./admin-links.component.css'],
})
export class AdminLinksComponent implements OnInit {

  // constructor() { }

  public ngOnInit(): void {
    console.log('Admin Links Page Open!');
  }

}

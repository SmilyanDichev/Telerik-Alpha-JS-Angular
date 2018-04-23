import { Component, OnInit } from '@angular/core';
import {} from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // fileNameDialogRef: MatDialogRef<any>;
  // toggle(){
  // this.fileNameDialogRef = this.thisDialogRef.open('wew');
  // }
}


// <app-dialog #loginModal></app-dialog>
// <app-dialog #registerModal></app-dialog>    
// <app-dialog #logoutModal></app-dialog>  
// <app-dialog #loginModal></app-dialog> 
import {
Component,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material';
import {
  DialogComponent
} from './dialog/dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  dialogComponentRef: MatDialogRef < DialogComponent > ;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  loginModal() {

    this.dialogComponentRef=this.dialog.open(DialogComponent);

  }

  logoutModal() {

  }

  registerModal() {

  }

}

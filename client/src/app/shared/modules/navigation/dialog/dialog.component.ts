import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form:FormGroup;

  constructor(  private formBuilder: FormBuilder,
                private dialogRef: MatDialogRef <DialogComponent>
              ) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    })
  }
  submit(form) {
    this.dialogRef.close(form.value);
  }
}

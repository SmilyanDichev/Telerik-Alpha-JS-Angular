import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SharedModule } from '../../shared/shared.module';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <LoginComponent>) { }
  ngOnInit() {
    this.rForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password : [null, Validators.compose([Validators.minLength(3),Validators.maxLength(100)])],
    });
  }
  submit(rForm) {
    this.dialogRef.close(rForm.value);
  }
}

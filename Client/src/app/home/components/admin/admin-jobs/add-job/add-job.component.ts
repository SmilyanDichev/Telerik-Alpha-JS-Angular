import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,
         FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatFormField } from '@angular/material';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  rForm: FormGroup;
  title: string;
  description: string;
  category: string;
  status: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <AddJobComponent>
            ) { }

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      title: [null, Validators.compose([
                      Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(256)])],
      description : [null, Validators.compose([
                            Validators.required,
                            Validators.minLength(4),
                            Validators.maxLength(16384)])],
      category : [null, Validators.compose([
                            Validators.required,
                            ])],
      status : [null, Validators.compose([
                            Validators.required,
                            ])],
    });
  }
  submit(rForm) {
    this.dialogRef.close(rForm.value);
  }
}

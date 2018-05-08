import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {

  private catOptions: string[] = [
    'IT', 'HR', 'Accounting',
  ];
  private statusOptions: string[] = [
    'Active', 'Inactive',
  ];

  private rForm: FormGroup;
  private title: string;
  private description: string;
  private category: string;
  private status: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <AddJobComponent> ,
  ) {}

  public ngOnInit(): void {

    const minLenTitle: number = 3;
    const maxLenTitle: number = 256;

    const minLenDescription: number = 4;
    const maxLenDescription: number = 16384;

    this.rForm = this.formBuilder.group({
      title: [null, Validators.compose([
        Validators.required,
        Validators.minLength(minLenTitle),
        Validators.maxLength(maxLenTitle),
      ])],
      description: [null, Validators.compose([
        Validators.required,
        Validators.minLength(minLenDescription),
        Validators.maxLength(maxLenDescription),
      ])],
      category: [null, Validators.compose([
        Validators.required,
      ])],
      status: [null, Validators.compose([
        Validators.required,
      ])],
    });
  }
  private submit(rForm: FormGroup): void {
    this.dialogRef.close(rForm.value);
  }
}

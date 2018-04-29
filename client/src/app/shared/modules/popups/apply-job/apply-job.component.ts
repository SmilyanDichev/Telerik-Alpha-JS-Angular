import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})
export class ApplyJobComponent implements OnInit {
  private title: string;
  private rForm: FormGroup;
  private comment: string;
  private cv: string;
  private letter: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <ApplyJobComponent>) {
  }

  public ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.rForm = this.formBuilder.group({
      comment: [null, Validators.compose([Validators.required, Validators.email])],
      cv : [null, Validators.compose([Validators.required])],
      letter : [null],
    });
  }
  private submit(rForm: FormGroup): void {
    this.dialogRef.close(rForm.value);
  }
}

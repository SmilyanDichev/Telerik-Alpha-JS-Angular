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

  private selectedCV;
  private selectedLetter;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <ApplyJobComponent>) {
  }

  public ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.rForm = this.formBuilder.group({
      comment: [null, Validators.compose([Validators.required])],
    });
  }

  private submit(rForm: FormGroup): void {
    const formData = {
        comment: rForm.value.comment,
        CV: this.selectedCV,
        Letter: this.selectedLetter,
      };
    console.log('apply component form data', formData);
    this.dialogRef.close(formData);
  }

  private onLeterSelected(event: any): void {
    this.selectedLetter = event.target.files[0];
  }

  private onCVSelected(event: any): void {
    this.selectedCV = event.target.files[0];
  }

}

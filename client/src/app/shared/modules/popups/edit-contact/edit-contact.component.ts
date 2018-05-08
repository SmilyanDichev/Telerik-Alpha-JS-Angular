import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  private rForm: FormGroup;
  private contactArr: string[];
  private name: string;
  private value: string;
  private isAddress: boolean;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <EditContactComponent>) { }

  public ngOnInit(): void {
    const minNameLen = 2;
    const maxNameLen = 128;
    const minValueLen = 2;
    const maxValieLen = 1024;

    this.dialogRef.disableClose = true;
    this.rForm = this.formBuilder.group({
      name: [null, Validators.compose(
        [Validators.required, Validators.minLength(minNameLen), Validators.maxLength(maxNameLen)])],
      value: [null, Validators.compose(
        [Validators.minLength(minValueLen), Validators.maxLength(maxValieLen)])],
      isAddress: [null],
    });
  }
  private submit(rForm: FormGroup): void {
    this.dialogRef.close(rForm.value);
  }
}

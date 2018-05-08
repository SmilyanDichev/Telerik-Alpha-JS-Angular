import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {

  private rForm: FormGroup;
  private contactArr: string[];
  private name: string;
  private value: string;
  private isAddress: boolean;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef <AddContactComponent>) { }

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

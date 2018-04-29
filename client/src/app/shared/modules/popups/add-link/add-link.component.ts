import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css'],
})
export class AddLinkComponent implements OnInit {

  private rForm: FormGroup;
  private typesArr: string[];
  private name: string;
  private linkTarget: string;
  private iconLink: string;
  private type: string;
  private isHidden: boolean;

  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef <AddLinkComponent>) { }

  public ngOnInit(): void {
    const minNameLen = 3;
    const maxNameLen = 128;

    this.dialogRef.disableClose = true;
    this.rForm = this.formBuilder.group({
      name: [null, Validators.compose(
        [Validators.required, Validators.minLength(minNameLen), Validators.maxLength(maxNameLen)])],
      linkTarget: [null, Validators.compose(
        [Validators.required])],
      iconLink: [null, Validators.compose(
        [Validators.required])],
      type: [null, Validators.compose(
        [Validators.required])],
      isHidden: [null, Validators.compose(
        [Validators.required])],
    });
  }
  private submit(rForm: FormGroup): void {
    this.dialogRef.close(rForm.value);
  }

}

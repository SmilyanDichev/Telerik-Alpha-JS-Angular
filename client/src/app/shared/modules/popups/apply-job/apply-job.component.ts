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
  private formDataValid: boolean = true;

  private errorCV: any = 'CV wrong file format or size!';
  private errorLetter: any = 'Letter wrong file format or size!';
  private showErrorCV = false;
  private showErrorLetter = false;
  private allowedFilesExtensions: string [] = ['jpg', 'pdf', 'docx', 'doc'];

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
        CV: this.selectedCV  ,
        Letter: this.selectedLetter,
      };
    console.log('apply component form data', formData);
    this.dialogRef.close(formData);
  }

  private cancel(): void {
    this.dialogRef.close(null);
  }

  private onLeterSelected(event: any): void {
    if (this.checkExtension(event, this.allowedFilesExtensions && this.checkFileSize(event))) {
      this.showErrorLetter = false;
      this.selectedLetter = event.target.files[0];
    } else {
      this.showErrorLetter = true;
    }
  }

  private onCVSelected(event: any): void {
    if (this.checkExtension(event, this.allowedFilesExtensions && this.checkFileSize(event))) {
      this.showErrorCV = false;
      this.selectedCV = event.target.files[0];
    } else {
      this.showErrorCV = true;
    }
  }

  private checkExtension(event: any, allowedExtensions: any): boolean {
    const file = event.target.files[0];
    const currentFileExtension = file.name.split('.').pop();
    return this.isInArray(currentFileExtension, this.allowedFilesExtensions);
  }

  private  checkFileSize(event: any): boolean {
    const maxSize = 16000000;
    const file = event.target.files[0];
    // console.log(file);
    const currentFileSize = file.size;
    console.log('check file size', currentFileSize);
    return currentFileSize <  maxSize;
  }

  private isInArray(word: string, array: string[] ): any {
    return array.indexOf(word.toLowerCase()) > -1;

}

}

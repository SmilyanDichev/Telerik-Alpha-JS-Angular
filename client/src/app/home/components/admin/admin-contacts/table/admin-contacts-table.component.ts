import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AuthService, ContactService } from '../../../../../core';
import { Contact } from '../../../../../shared/models/contact/contact';
import { EditContactComponent } from '../../../../../shared/modules/popups/edit-contact/edit-contact.component';
import { ConfirmComponent } from './../../../../../shared/modules/popups/confirm/confirm.component';

@Component({
  selector: 'admin-contacts-table',
  templateUrl: './admin-contacts-table.component.html',
  styleUrls: ['./admin-contacts-table.component.css'],
})
export class AdminContactsTableComponent implements OnInit {

public editContactComponentRef: MatDialogRef<EditContactComponent>;
public confirmComponent: MatDialogRef<ConfirmComponent>;

private contactsData: object[];
private displayedColumns = [ 'id', 'name', 'value', 'ismap', 'createdAt', 'buttons'];
private dataSource;
private currentUserEmail: string;

constructor(private dialog: MatDialog,
            private authService: AuthService,
            private contactService: ContactService,
            private toastr: ToastrService) { }

public ngOnInit(): void {
    this.currentUserEmail = this.authService.getCurrentUserEmail();
    this.getContacts();
  }

private getContacts(): void {
  this.contactService.getContacts().subscribe(
    (res: Contact[]) => {
      const convertedContacts = this.contactService.contactObjectConverter(res);
      this.dataSource = new MatTableDataSource(convertedContacts);
      console.log('contact data received from contactService!--------------', res);
    },
    (error: HttpErrorResponse) => {
      console.log('contact data from contactService FAILED!', error);
    },
  );
}

private editContactModal(contactId: number): void {
  console.log('Edit-Contact Modal Opened!');
  this.editContactComponentRef = this.dialog.open(EditContactComponent);
  this.editContactComponentRef
    .afterClosed()
    .subscribe((newContact) => {
      console.log('Sending new contact edit to contactService!', newContact);
      this.contactService.editContact(contactId, newContact)
        .subscribe(
             (reply) => {
            console.log('Contact Edit request succesful! ', reply);
            this.toastr.success(`Contact updated!`, 'Success');
          }, (error) => {
            console.log('Sending updated Contact data to contactService failed!', error);
             },
        );
    });
  }
private confirm(jobId: number): void {
  console.log('Confirm Modal Opened!');
  this.confirmComponent = this.dialog.open(ConfirmComponent);
}

}
